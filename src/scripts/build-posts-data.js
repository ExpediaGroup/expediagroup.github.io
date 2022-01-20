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
const parser = new Parser();
const moment = require('moment');
const fs = require("fs");


async function fetchAndDumpPosts() {
    const feed = await parser.parseURL('https://medium.com/feed/expedia-group-tech');
    const posts = feed.items.map(item => ({
        title : item.title,
        creator : item.creator,
        link : item.link,
        date : moment(item.isoDate).format('MMM D, YYYY')
    }))
    fs.writeFile("static/posts.json", JSON.stringify(posts, null, 2), (err) => {
        if (err) {
            console.error("Failed to create posts file: ", err)
        }
    });
}

fetchAndDumpPosts()