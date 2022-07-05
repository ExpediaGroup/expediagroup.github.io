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

import React from 'react';
import renderer from 'react-test-renderer';
import Repository from './Repository';

jest.mock('./ArrowLink', () => 'ArrowLink');

const NAME = 'my-repo';
const DESCRIPTION = 'my description';
const IMAGE_URL = 'https://my/repo/image';
const REPO_URL = 'https://my/repo';

it('renders correctly', () => {
    const tree = renderer
        .create(<Repository name={NAME} description={DESCRIPTION} imageUrl={IMAGE_URL} repoUrl={REPO_URL}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
