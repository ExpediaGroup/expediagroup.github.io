/*
Copyright 2021 Expedia, Inc.

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
const fs = require("fs");


const repoNames = [
    { owner: "ExpediaGroup", name: "graphql-kotlin" },
    { owner: "ExpediaGroup", name: "jenkins-spock" },
    { owner: "ExpediaGroup", name: "stream-registry" },
    { owner: "ExpediaGroup", name: "flyte" },
    { owner: "ExpediaGroup", name: "graphql-component" },
    { owner: "ExpediaGroup", name: "bull" },
    { owner: "ExpediaGroup", name: "beekeeper" },
    { owner: "ExpediaGroup", name: "mittens" },
    { owner: "ExpediaGroup", name: "jarviz" }
]

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

async function fetchAndDumpRepoData() {
    const promises = repoNames.map(props =>
        githubClient.query({
            query: QUERY_REPO_INFO,
            variables: {
                owner : props.owner,
                name : props.name
            }
        }))
    const repoData = await Promise.all(promises).then(results => results.map(result => ({
            name: result.data.repository.name,
            description: result.data.repository.description,
            imageUrl: result.data.repository.openGraphImageUrl,
            repoUrl: result.data.repository.url
        })))
    fs.writeFile("static/repos.json", JSON.stringify(repoData, null, 2), (err) => {
        if (err) {
            console.error("Failed to create repo file: ", err)
        }
    });
}

fetchAndDumpRepoData()