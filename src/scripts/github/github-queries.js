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

const {ApolloClient, gql, HttpLink, InMemoryCache} = require("@apollo/client")
const fetch = require("cross-fetch")

const githubClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        fetch,
        headers: {
            Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`
        }
    }),
    cache: new InMemoryCache()
})

/**
 * The default maximum number of fetched repositories.
 * It is the maximum allowed by GitHub API with a single query.
 */
const MAX_REPOSITORIES_DEFAULT = 100

const buildQueryForReposByTopic = (orgName, topic, maxRepos) => gql`
  query {
    search (first: ${maxRepos},
            type: REPOSITORY,
            query: "org:${orgName} topic:${topic}") {
      nodes {
        ... on Repository {
          name
          description
          openGraphImageUrl
          url
        }
      }
    }
  }`

/**
 * @typedef Repository
 * @property {string} name The repository name.
 * @property {string} description The repository description. Empty string if not available.
 * @property {string} imageUrl The url of the social media image for the repository,
 * see https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview.
 * Empty string if not available.
 * @property {string} repoUrl The url of the repository.
 */

/**
 * @typedef Error
 * @property {{message: string}} error Error with a message. For more fields see https://www.apollographql.com/docs/react/data/queries/#error
 */

/**
 * Searches all repositories in the given GitHub organization having the given topic, using GitHub GraphQL API.
 * @param {string} orgName the name of the GitHub organization
 * @param {string} topic the topic that all repos should have
 * @param {number} maxRepos the maximum number of repositories that will be returned. If not provided defaults to {@link MAX_REPOSITORIES_DEFAULT}
 * @returns {Promise<Repository[]|Error>} a promise resolving to the found repos or rejecting with an error
 */
 exports.queryRepositoriesByTopic = (orgName, topic, maxRepos = MAX_REPOSITORIES_DEFAULT) => {
    return githubClient.query({
        query: buildQueryForReposByTopic(orgName, topic, maxRepos)
    }).then(result => result.data.search.nodes.map(repo => ({
        name: repo.name,
        description: repo.description || '',
        imageUrl: repo.openGraphImageUrl || '',
        repoUrl: repo.url
    }))).then(repos => repos.sort((repo1, repo2) => repo1.name.localeCompare(repo2.name)))
 }
