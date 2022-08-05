/*
Copyright 2022 Expedia, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const apolloClientModule = require('@apollo/client')
const apolloClientMockQuery = jest.fn()
apolloClientModule.ApolloClient = jest.fn(() => ({
    query: apolloClientMockQuery
}));


describe('queryRepositoriesByTopic', () => {
    const {queryRepositoriesByTopic} = require('./github-queries.js')
    const ORG = 'test-org'
    const TOPIC = 'test-topic'
    const MAX_REPOS = 27
    const REPO_A = {
        name: 'repo-a',
        description: 'description-a',
        openGraphImageUrl: 'image-a',
        url: 'url-a'
    }
    const REPO_B = {
        name: 'repo-b',
        description: 'description-b',
        openGraphImageUrl: 'image-b',
        url: 'url-b'
    }
    const responseWith = (...repos) => ({
        data: {
            search: {
                nodes: repos
            }
        }
    })
    const EMPTY_RESPONSE = responseWith()
    const ERROR_RESPONSE = {
        error: {
            message: 'test-error-message'
        }
    }

    test('passes the correct organization name and topic to ApolloClient', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(EMPTY_RESPONSE)

        await queryRepositoriesByTopic(ORG, TOPIC)

        expect(apolloClientMockQuery).toBeCalledWith(
            expect.objectContainingString(`org:${ORG} topic:${TOPIC}`)
        )
    })
    
    test('passes the correct number of max repos to ApolloClient', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(EMPTY_RESPONSE)

        await queryRepositoriesByTopic(ORG, TOPIC, MAX_REPOS)

        expect(apolloClientMockQuery).toBeCalledWith(
            expect.objectContainingString(`"value":"${MAX_REPOS}"`)
        )
    })

    test('maps fields from ApolloClient response and sort repos by name', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(responseWith(REPO_B, REPO_A))

        const promise = queryRepositoriesByTopic(ORG, TOPIC)

        await expect(promise).resolves.toStrictEqual([{
            name: REPO_A.name,
            description: REPO_A.description,
            imageUrl: REPO_A.openGraphImageUrl,
            repoUrl: REPO_A.url
        }, {
            name: REPO_B.name,
            description: REPO_B.description,
            imageUrl: REPO_B.openGraphImageUrl,
            repoUrl: REPO_B.url
        }])
    })

    test('returns empty description if undefined in ApolloClient response', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(responseWith({
            description: undefined
        }))

        const promise = queryRepositoriesByTopic(ORG, TOPIC)

        await expect(promise).resolves.toContainEqual(expect.objectContaining({
            description: ''
        }))
    })

    test('returns empty image url if undefined in ApolloClient response', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(responseWith({
            openGraphImageUrl: undefined
        }))

        const promise = queryRepositoriesByTopic(ORG, TOPIC)

        await expect(promise).resolves.toContainEqual(expect.objectContaining({
            imageUrl: ''
        }))
    })

    test('forwards the same error received from ApolloClient', async () => {
        apolloClientMockQuery.mockRejectedValueOnce(ERROR_RESPONSE)

        const promise = queryRepositoriesByTopic(ORG, TOPIC)

        await expect(promise).rejects.toStrictEqual(ERROR_RESPONSE)
    })
})

expect.extend({
    /**
     * Matches any received object whose JSON stringification contains the expected string.
     * Use this matcher instead of {@link expect.objectContaining} when the structure of the
     * object is complex and you just need to find a string at any nesting level within it.
     */
    objectContainingString(receivedObj, expectedString) {
      const pass = JSON.stringify(receivedObj).includes(expectedString)
  
      if (pass) {
        return {
          message: () => (`expected ${this.utils.printReceived(receivedObj)} not to contain string ${expectedString}`),
          pass: true
        }
      } else {
        return {
          message: () => (`expected ${this.utils.printReceived(receivedObj)} to contain string ${expectedString}`),
          pass: false
        }
      }
    }
  })
