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

const cheerio = require('cheerio');
const Parser = require('rss-parser');
const rssParser = new Parser();
const MEDIUM_RSS_URL = 'https://medium.com/feed/expedia-group-tech';
const moment = require('moment');
const fs = require("fs");


async function fetchAndDumpPosts() {
    const feed = await rssParser.parseURL(MEDIUM_RSS_URL);
    const posts = feed.items.map(item => ({
        title : sanitizeText(item.title),
        creator : sanitizeText(item.creator),
        link : sanitizeText(item.link),
        date : moment(item.isoDate, moment.ISO_8601).format('MMM D, YYYY'),
        imageUrl : sanitizeText(parseImageUrl(item['content:encoded'])),
    }))
    fs.writeFile("static/posts.json", JSON.stringify(posts, null, 2), (err) => {
        if (err) {
            console.error("Failed to create posts file: ", err)
        }
    });
}

fetchAndDumpPosts()

function parseImageUrl(htmlContent) {
    const $ = cheerio.load(htmlContent);
    return $('img:first').attr('src')
}

function sanitizeText(text) {
    return text === undefined ? '' : cheerio.load(text).text();
}
