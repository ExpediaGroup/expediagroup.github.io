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

const fsPromises = require("fs").promises;
const {dirname} = require('path')

/**
 * Serializes some data to JSON and asynchronously write it to file system at the given path.
 * Recursively creates the directories containing the file.
 * Returns a promise which resolves to <code>undefined</code>
 * if successful, or rejects with an error.
 * @param {string} path the file path
 * @param {any} data any data that will be serialized to JSON
 * @returns {Promise<void|Error>} promise representing the result of the file creation
 */
exports.writeJsonFile = async (path, data) => {
    await fsPromises.mkdir(dirname(path), {recursive: true})
    await fsPromises.writeFile(path, JSON.stringify(data, null, 2))
}
