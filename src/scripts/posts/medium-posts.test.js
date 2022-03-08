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


const each = require('jest-each').default
const mockRssParser = {
    parseURL: jest.fn()
}
jest.mock('rss-parser', () => jest.fn(() => mockRssParser))


describe('getMediumPostsFromRss', () => {
    const {getMediumPostsFromRss} = require('./medium-posts')
    const RSS_URL = 'test-url'
    const CREATOR = 'test-creator'
    const TITLE = 'test-title'
    const LINK = 'test-link'
    const IMG_1_URL = 'image-1-url'
    const IMG_2_URL = 'image-2-url'
    const HTML_WITH_IMG_1 = `<p>before</p><img src="${IMG_1_URL}"/><p>after</p>`
    const HTML_WITH_IMG_1_AND_2 = `<p>before</p><img src="${IMG_1_URL}"/><img src="${IMG_2_URL}"/><p>after</p>`
    const HTML_WITH_IMG_ILL_FORMED = `<p>not closed<img src="${IMG_1_URL}/>"`
    const HTML_WITHOUT_IMG = '<h2>no images here</h2>'
    const ERROR = new Error('test error')

    test('returns empty list if RSS Parser returns undefined feed', async () => {
        mockRssParser.parseURL.mockResolvedValueOnce(undefined)

        await expect(getMediumPostsFromRss(RSS_URL)).resolves.toEqual([])
    })

    test('returns empty list if RSS Parser returns feed without items', async () => {
        mockRssParser.parseURL.mockResolvedValueOnce({})

        await expect(getMediumPostsFromRss(RSS_URL)).resolves.toEqual([])
    })

    test('passes the correct url to RSS Parser', async () => {
        await getMediumPostsFromRss(RSS_URL)

        expect(mockRssParser.parseURL).toHaveBeenLastCalledWith(RSS_URL)
    })

    each`
        rssTitle     | expectedTitle
        ${undefined} | ${''}
        ${null}      | ${''}
        ${TITLE}     | ${TITLE}
    `.test('returns title $expectedTitle when RSS Parser returned $rssTitle', async ({rssTitle, expectedTitle}) => {
        mockRssParser.parseURL.mockResolvedValueOnce({items: [{title: rssTitle}]})

        await expect(getMediumPostsFromRss(RSS_URL)).resolves.toHaveProperty('[0].title', expectedTitle)
    })

    each`
        rssCreator   | expectedCreator
        ${undefined} | ${''}
        ${null}      | ${''}
        ${CREATOR}   | ${CREATOR}
    `.test('returns creator $expectedCreator when RSS Parser returned $rssCreator', async ({rssCreator, expectedCreator}) => {
        mockRssParser.parseURL.mockResolvedValueOnce({items: [{creator: rssCreator}]})

        await expect(getMediumPostsFromRss(RSS_URL)).resolves.toHaveProperty('[0].creator', expectedCreator)
    })

    each`
        rssLink      | expectedLink
        ${undefined} | ${''}
        ${null}      | ${''}
        ${LINK}      | ${LINK}
    `.test('returns link $expectedLink when RSS Parser returned $rssLink', async ({rssLink, expectedLink}) => {
        mockRssParser.parseURL.mockResolvedValueOnce({items: [{link: rssLink}]})

        await expect(getMediumPostsFromRss(RSS_URL)).resolves.toHaveProperty('[0].link', expectedLink)
    })

    each`
        rssDate                       | expectedDate
        ${undefined}                  | ${'Invalid date'}
        ${null}                       | ${'Invalid date'}
        ${'2022-03-01T14:01:15.749Z'} | ${'Mar 1, 2022'}
    `.test('returns date $expectedDate when RSS Parser returned $rssDate', async ({rssDate, expectedDate}) => {
        mockRssParser.parseURL.mockResolvedValueOnce({items: [{isoDate: rssDate}]})

        await expect(getMediumPostsFromRss(RSS_URL)).resolves.toHaveProperty('[0].date', expectedDate)
    })

    each`
        rssContentEncoded             | expectedImageUrl
        ${undefined}                  | ${''}
        ${null}                       | ${''}
        ${HTML_WITHOUT_IMG}           | ${''}
        ${HTML_WITH_IMG_ILL_FORMED}   | ${''}
        ${HTML_WITH_IMG_1}            | ${IMG_1_URL}
        ${HTML_WITH_IMG_1_AND_2}      | ${IMG_1_URL}
    `.test('returns imageUrl $expectedImageUrl parsing the first <img> tag out of field content:encoded $rssContentEncoded',
        async ({rssContentEncoded, expectedImageUrl}) => {
            mockRssParser.parseURL.mockResolvedValueOnce({items: [{'content:encoded': rssContentEncoded}]})

            await expect(getMediumPostsFromRss(RSS_URL)).resolves.toHaveProperty('[0].imageUrl', expectedImageUrl)
        })

    test('throws the same error received from RSS Parser', async () => {
        mockRssParser.parseURL.mockRejectedValueOnce(ERROR)

        await expect(getMediumPostsFromRss(RSS_URL)).rejects.toThrow(ERROR)
    })
})
