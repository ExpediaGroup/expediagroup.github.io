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
const {queryRepository} = require('./github-queries.js')


describe('queryRepository', () => {
    test('delegates to ApolloClient passing the correct org name and repo name', async () => {
        apolloClientMockQuery.mockResolvedValueOnce({
            data: {
                repository: {
                    name: "test-repo",
                    description: "test-repo-description",
                    openGraphImageUrl: "test-image-url",
                    url: "test-repo-url"
                }
            }
        })

        await queryRepository("org1", "repo1")

        expect(apolloClientMockQuery).toHaveBeenCalled()
        const queryOptions = apolloClientMockQuery.mock.calls[0][0]
        expect(queryOptions.variables).toStrictEqual({
            owner : "org1",
            name : "repo1"
        })
    });
});
