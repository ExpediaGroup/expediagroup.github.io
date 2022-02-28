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

const fs = require('fs');
jest.mock('fs', () => require('memfs').fs);
const path = require('path')
const {stripIndent} = require('common-tags')

describe('writeJsonFile', () => {
    const {writeJsonFile} = require('./fs-utils.js');
    const DIR = '/fake/dir'
    const FILE = path.resolve(DIR, 'test.json')
    fs.mkdirSync(DIR, {recursive: true})

    test('serializes object to JSON and writes it to file system', () => {
        const data = {
            foo: 'bar'
        }

        writeJsonFile(FILE, data)

        expect(fs.readFileSync(FILE, 'utf8')).toEqual(stripIndent`
          {
            "foo": "bar"
          }`)
    })
})
