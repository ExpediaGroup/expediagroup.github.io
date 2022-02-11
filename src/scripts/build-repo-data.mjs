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

import {queryRepository} from "./github/github-queries.mjs";
import fs from 'fs';


const repositories = [
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

async function fetchAndDumpRepoData() {
    const promises = repositories.map(repo => queryRepository(repo.organization, repo.name))
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
