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
apolloClientMockQuery.lastCallFirstArg = () => {
    expect(apolloClientMockQuery).toHaveBeenCalled()
    return apolloClientMockQuery.mock.calls[0][0]
}


describe('queryRepository', () => {
    const {queryRepository} = require('./github-queries.js')
    const ORG = 'test-org'
    const REPO = 'test-repo'
    const DESCRIPTION = 'test-description'
    const IMAGE_URL = 'test-image-url'
    const REPO_URL = 'test-repo-url'
    const OK_RESPONSE = {
        data: {
            repository: {
                name: REPO,
                description: DESCRIPTION,
                openGraphImageUrl: IMAGE_URL,
                url: REPO_URL
            }
        }
    }
    const ERROR_RESPONSE = {
        error: {
            message: 'test-error-message'
        }
    }

    test('passes the correct organization name and repository name to ApolloClient', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(OK_RESPONSE)

        await queryRepository(ORG, REPO)

        expect(apolloClientMockQuery.lastCallFirstArg().variables).toStrictEqual({
            owner : ORG,
            name : REPO
        })
    })

    test('maps fields from ApolloClient successful response', async () => {
        apolloClientMockQuery.mockResolvedValueOnce(OK_RESPONSE)

        const promise = queryRepository(ORG, REPO)

        await expect(promise).resolves.toStrictEqual({
            name: REPO,
            description: DESCRIPTION,
            imageUrl: IMAGE_URL,
            repoUrl: REPO_URL
        })
    })

    test('forwards the same error received from ApolloClient', async () => {
        apolloClientMockQuery.mockRejectedValueOnce(ERROR_RESPONSE)

        const promise = queryRepository(ORG, REPO)

        await expect(promise).rejects.toStrictEqual(ERROR_RESPONSE)
    })
})
