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

const {getMediumPostsFromRss} = require('./posts/medium-posts');
const EXPEDIA_MEDIUM_RSS_URL = 'https://medium.com/feed/expedia-group-tech';
const {writeJsonFile} = require("./filesystem/fs-utils");

/**
 * Fetches blog posts from the given Medium RSS feed and write them as JSON to the file at the given path.
 * @param rssUrl url of the medium.com RSS feed
 * @param filePath the json file that will be written
 * @returns {Promise<void|Error>} a promise resolving to <code>undefined</code> in case of success or rejecting with an error
 */
exports.fetchAndDumpPosts = async (rssUrl = EXPEDIA_MEDIUM_RSS_URL, filePath = 'static/posts.json') => {
    const posts = await getMediumPostsFromRss(rssUrl)
    await writeJsonFile(filePath, posts)
}
