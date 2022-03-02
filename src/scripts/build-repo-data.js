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

const {queryRepository} = require('./github/github-queries');
const {writeJsonFile} = require('./filesystem/fs-utils');

const HOME_PAGE_REPOSITORIES = [
    { organization: "ExpediaGroup", name: "graphql-kotlin" },
    { organization: "ExpediaGroup", name: "jenkins-spock" },
    { organization: "ExpediaGroup", name: "stream-registry" },
    { organization: "ExpediaGroup", name: "flyte" },
    { organization: "ExpediaGroup", name: "graphql-component" },
    { organization: "ExpediaGroup", name: "bull" },
    { organization: "ExpediaGroup", name: "beekeeper" },
    { organization: "ExpediaGroup", name: "mittens" },
    { organization: "ExpediaGroup", name: "jarviz" }
]

/**
 * @typedef Repository
 * @property {string} organization The name of the GitHub organization.
 * @property {string} name The name of the GitHub repository.
 */

/**
 * Fetches information about the given GitHub repositories and write it as JSON to the file at the given path.
 * @param {Repository[]} repositories the repositories to be fetched
 * @param {string} filePath the json file that will be written
 * @returns {Promise<void | Error>} a promise resolving to <code>undefined</code> in case of success or rejecting with an error
 */
exports.fetchAndDumpRepositories = async (repositories = HOME_PAGE_REPOSITORIES, filePath = 'static/repos.json') => {
    const repoData = await Promise.all(repositories.map(repo => queryRepository(repo.organization, repo.name)))
    await writeJsonFile(filePath, repoData)
}
