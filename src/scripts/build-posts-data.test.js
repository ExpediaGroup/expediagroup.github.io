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

const {getMediumPostsFromRss} = require('./posts/medium-posts')
const {writeJsonFile} = require('./filesystem/fs-utils')
const {fetchAndDumpPosts} = require('./build-posts-data')

jest.mock('./posts/medium-posts')
jest.mock('./filesystem/fs-utils')

const FILE = 'file1.json'
const RSS_URL = 'test-rss-url'
const POST1 = {foo: 'bar'}
const POST2 = {baz: 'qux'}
const ERROR_MSG = 'error1'

test('builds successfully one post', async () => {
    getMediumPostsFromRss.mockResolvedValueOnce([POST1])
    writeJsonFile.mockResolvedValueOnce(undefined)

    await fetchAndDumpPosts(RSS_URL, FILE)

    expect(getMediumPostsFromRss).toHaveBeenCalledWith(RSS_URL)
    expect(writeJsonFile).toHaveBeenCalledWith(FILE, [POST1])
})

test('builds successfully two posts', async () => {
    getMediumPostsFromRss.mockResolvedValueOnce([POST1, POST2])
    writeJsonFile.mockResolvedValueOnce(undefined)

    await fetchAndDumpPosts(RSS_URL, FILE)

    expect(getMediumPostsFromRss).toHaveBeenCalledWith(RSS_URL)
    expect(writeJsonFile).toHaveBeenCalledWith(FILE, [POST1, POST2])
})

test('rejects with error if get posts fails', async () => {
    getMediumPostsFromRss.mockRejectedValueOnce(new Error(ERROR_MSG))

    await expect(fetchAndDumpPosts(RSS_URL, FILE)).rejects.toThrow(ERROR_MSG)
})

test('rejects with error if write to file fails', async () => {
    getMediumPostsFromRss.mockResolvedValueOnce([POST1])
    writeJsonFile.mockRejectedValueOnce(new Error(ERROR_MSG))

    await expect(fetchAndDumpPosts(RSS_URL, FILE)).rejects.toThrow(ERROR_MSG)
})
