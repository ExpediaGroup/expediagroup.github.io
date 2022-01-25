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

const Parser = require('rss-parser');
const moment = require('moment');
const fs = require("fs");

const MEDIUM_RSS_URL = 'https://medium.com/feed/expedia-group-tech';
const rssParser = new Parser({
    customFields: {
        item: [
            sanitizedField('title'),
            sanitizedField('dc:creator', 'creator'),
            sanitizedField('link')
        ]
    }
});

/**
 * Configures a field to be parsed so that its HTML is stripped out.
 * This is a security measure for text-only fields that will be rendered on a web page.
 * The name of the field in the parsed feed will be added the 'Snippet' suffix
 * (see https://github.com/rbren/rss-parser#custom-fields for more info).
 */
function sanitizedField(sourceFieldName, newFieldName = sourceFieldName) {
    return [sourceFieldName, newFieldName, {includeSnippet: true}]
}

async function fetchAndDumpPosts() {
    const feed = await rssParser.parseURL(MEDIUM_RSS_URL);
    const posts = feed.items.map(item => ({
        title : item.titleSnippet,
        creator : item.creatorSnippet,
        link : item.linkSnippet,
        date : moment(item.isoDate, moment.ISO_8601).format('MMM D, YYYY'),
    }))
    fs.writeFile("static/posts.json", JSON.stringify(posts, null, 2), (err) => {
        if (err) {
            console.error("Failed to create posts file: ", err)
        }
    });
}

fetchAndDumpPosts()
