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

import apolloClient from '@apollo/client';
import fetch from "cross-fetch";
const {ApolloClient, gql, HttpLink, InMemoryCache} = apolloClient;

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

export function queryRepository(orgName, repoName) {
    return githubClient.query({
        query: QUERY_REPO_INFO,
        variables: {
            owner : orgName,
            name : repoName
        }
    })
}
