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
const moment = require('moment');

/**
 * @typedef BlogPost
 * @property {string} title The post's title.
 * @property {string} creator The post's author.
 * @property {string} link The post's link.
 * @property {string} date The post's publish date.
 * @property {string} imageUrl The url for the main post's image.
 */

/**
 * Fetch and parse the given medium.com RSS feed to get the list
 * of last published blog posts.
 * @param rssUrl url of the Medium RSS feed
 * @returns {Promise<BlogPost[]|Error>} a promise resolving to the list of posts or rejecting with an error
 */
exports.getMediumPostsFromRss = async (rssUrl) => {
    const feed = await rssParser.parseURL(rssUrl);
    return feed?.items?.map(item => ({
        title: sanitizeText(item.title),
        creator: sanitizeText(item.creator),
        link: sanitizeText(item.link),
        date: moment(item.isoDate, moment.ISO_8601).format('MMM D, YYYY'),
        imageUrl: sanitizeText(parseFirstImageUrl(item['content:encoded'])),
    })) ?? []
}

function parseFirstImageUrl(htmlContent) {
    if (htmlContent) {
        const $ = cheerio.load(htmlContent)
        return $('img:first').attr('src')
    } else {
        return ''
    }
}

function sanitizeText(text) {
    return text ? cheerio.load(text).text() : ''
}
