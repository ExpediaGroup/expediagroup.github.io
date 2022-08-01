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

const QUERY_REPO_INFO = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      openGraphImageUrl
      url
    }
  }`

const MAX_REPOSITORIES = 100

const buildQueryForReposByTopic = (orgName, topic) => gql`
  query {
    search (first: ${MAX_REPOSITORIES},
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
 * Fetches some information of a given GitHub repository using GitHub GraphQL API.
 * @param {string} orgName the name of the GitHub organization
 * @param {string} repoName the name of the GitHub repository
 * @returns {Promise<Repository|Error>} a promise resolving to the repo info or rejecting with an error
 */
exports.queryRepository = (orgName, repoName) => {
    return githubClient.query({
        query: QUERY_REPO_INFO,
        variables: {
            owner : orgName,
            name : repoName
        }
    }).then(result => ({
        name: result.data.repository.name,
        description: result.data.repository.description || '',
        imageUrl: result.data.repository.openGraphImageUrl || '',
        repoUrl: result.data.repository.url
    }))
}

/**
 * Searches all repositories in the given GitHub organization having the given topic, using GitHub GraphQL API.
 * @param {string} orgName the name of the GitHub organization
 * @param {string} topic the topic that all repos should have
 * @returns {Promise<Repository[]|Error>} a promise resolving to the found repos or rejecting with an error
 */
 exports.queryRepositoriesByTopic = (orgName, topic) => {
    return githubClient.query({
        query: buildQueryForReposByTopic(orgName, topic)
    }).then(result => result.data.search.nodes.map(repo => ({
        name: repo.name,
        description: repo.description || '',
        imageUrl: repo.openGraphImageUrl || '',
        repoUrl: repo.url
    })))
 }
