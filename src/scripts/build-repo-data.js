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

const REPOSITORIES = [
    { organization: "ExpediaGroup", name: "beekeeper",                   featured: true },
    { organization: "ExpediaGroup", name: "bull",                        featured: true },
    { organization: "ExpediaGroup", name: "flyte",                       featured: true },
    { organization: "ExpediaGroup", name: "graphql-component",           featured: true },
    { organization: "ExpediaGroup", name: "graphql-kotlin",              featured: true },
    { organization: "ExpediaGroup", name: "jarviz",                      featured: true },
    { organization: "ExpediaGroup", name: "jenkins-spock",               featured: true },
    { organization: "ExpediaGroup", name: "mittens",                     featured: true },
    { organization: "ExpediaGroup", name: "stream-registry",             featured: true },
    { organization: "ExpediaGroup", name: "catalyst-render",             featured: false },
    { organization: "ExpediaGroup", name: "catalyst-server",             featured: false },
    { organization: "ExpediaGroup", name: "cypress-codegen",             featured: false },
    { organization: "ExpediaGroup", name: "determination",               featured: false },
    { organization: "ExpediaGroup", name: "flyte-client",                featured: false },
    { organization: "ExpediaGroup", name: "flyte-jira",                  featured: false },
    { organization: "ExpediaGroup", name: "flyte-slack",                 featured: false },
    { organization: "ExpediaGroup", name: "github-helpers",              featured: false },
    { organization: "ExpediaGroup", name: "github-webhook-proxy",        featured: false },
    { organization: "ExpediaGroup", name: "insights-explorer",           featured: false },
    { organization: "ExpediaGroup", name: "kubernetes-sidecar-injector", featured: false },
    { organization: "ExpediaGroup", name: "overwhelm",                   featured: false },
    { organization: "ExpediaGroup", name: "package-json-validator",      featured: false },
    { organization: "ExpediaGroup", name: "parsec",                      featured: false },
    { organization: "ExpediaGroup", name: "pitchfork",                   featured: false },
    { organization: "ExpediaGroup", name: "spinnaker-pipeline-trigger",  featured: false },
    { organization: "ExpediaGroup", name: "steerage",                    featured: false },
    { organization: "ExpediaGroup", name: "styx",                        featured: false },
    { organization: "ExpediaGroup", name: "waggle-dance",                featured: false }
]

/**
 * @typedef Repository
 * @property {string} organization The name of the GitHub organization.
 * @property {string} name The name of the GitHub repository.
 * @property {boolean} featured Whether the repository should be shown in the home page.
 */

/**
 * Fetches information about the given GitHub repositories and write it as JSON to the file at the given path.
 * @param {Repository[]} repositories the repositories to be fetched
 * @param {string} filePath the json file that will be written
 * @returns {Promise<void | Error>} a promise resolving to <code>undefined</code> in case of success or rejecting with an error
 */
exports.fetchAndDumpRepositories = async (repositories = REPOSITORIES, filePath = 'static/repos.json') => {
    const repoData = await Promise.all(repositories.map(repo => queryRepository(repo.organization, repo.name)
        .then(fetchedRepo => ({...fetchedRepo, featured: repo.featured}))))
    await writeJsonFile(filePath, repoData)
}
