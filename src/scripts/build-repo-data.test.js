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

const {queryRepository} = require('./github/github-queries')
const {writeJsonFile} = require('./filesystem/fs-utils')
const {fetchAndDumpRepositories} = require('./build-repo-data')

jest.mock('./github/github-queries')
jest.mock('./filesystem/fs-utils')

const FILE = 'file1.json'
const REPO1 = {organization: 'org1', name: 'repo1', featured: false}
const REPO2 = {organization: 'org2', name: 'repo2', featured: true}
const REPO1_FETCHED = {foo: 'bar'}
const REPO2_FETCHED = {baz: 'qux'}
const ERROR_MSG = 'error1'

test('builds successfully one non-featured repository', async () => {
    queryRepository.mockResolvedValueOnce(REPO1_FETCHED)
    writeJsonFile.mockResolvedValueOnce(undefined)

    await fetchAndDumpRepositories([REPO1], FILE)

    expect(queryRepository).toHaveBeenCalledWith(REPO1.organization, REPO1.name)
    expect(writeJsonFile).toHaveBeenCalledWith(FILE, [{...REPO1_FETCHED, featured: false}])
})

test('builds successfully two repositories with 2nd repo featured', async () => {
    queryRepository.mockResolvedValueOnce(REPO1_FETCHED).mockResolvedValueOnce(REPO2_FETCHED)
    writeJsonFile.mockResolvedValueOnce(undefined)

    await fetchAndDumpRepositories([REPO1, REPO2], FILE)

    expect(queryRepository).toHaveBeenCalledTimes(2)
    expect(queryRepository).toHaveBeenNthCalledWith(1, REPO1.organization, REPO1.name)
    expect(queryRepository).toHaveBeenNthCalledWith(2, REPO2.organization, REPO2.name)
    expect(writeJsonFile).toHaveBeenCalledWith(
        FILE, [{...REPO1_FETCHED, featured: false}, {...REPO2_FETCHED, featured: true}]
    )
})

test('rejects with error if at least one query fails', async () => {
    queryRepository.mockResolvedValueOnce(REPO1_FETCHED).mockRejectedValueOnce(new Error(ERROR_MSG))

    await expect(fetchAndDumpRepositories([REPO1, REPO2], FILE)).rejects.toThrow(ERROR_MSG)
})

test('rejects with error if write to file fails', async () => {
    queryRepository.mockResolvedValueOnce(REPO1_FETCHED)
    writeJsonFile.mockRejectedValueOnce(new Error(ERROR_MSG))

    await expect(fetchAndDumpRepositories([REPO1], FILE)).rejects.toThrow(ERROR_MSG)
})
