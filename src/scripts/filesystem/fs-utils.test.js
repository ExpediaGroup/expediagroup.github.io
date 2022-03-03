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
const {stripIndent} = require('common-tags')

describe('writeJsonFile', () => {
    const {writeJsonFile} = require('./fs-utils.js');
    const FILE = '/fake/dir/test.json'
    const DATA = { foo: 'bar' }

    test('serializes object to JSON and writes it to file system', async () => {
        await writeJsonFile(FILE, DATA)

        expect(fs.readFileSync(FILE, 'utf8')).toEqual(stripIndent`
          {
            "foo": "bar"
          }`)
    })

    test('rejects with an error if file path is null', async () => {
        await expect(writeJsonFile(null, DATA)).rejects.toThrow(/path.*null/)
    })

    test('rejects with an error if file path is root dir', async () => {
        await expect(writeJsonFile('/', DATA)).rejects.toThrow('illegal operation on a directory')
    })
})
