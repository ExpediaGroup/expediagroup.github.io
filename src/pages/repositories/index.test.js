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
import RepositoriesPage from './index';

const DOCUSAURUS_CTX = {
    siteConfig: {
        customFields: {
            repositoriesConfig: {
                repositoriesPage: {
                    title: 'repos page title',
                    subtitle: 'repos page subtitle'
                }
            }
        }
    }
}

jest.mock('../../components/HeroBanner', () => 'HeroBanner');
jest.mock('../../components/Repositories', () => 'Repositories');
jest.mock('@site/static/repos.json', () => 'fake-repos-data', { virtual: true });
jest.mock('@theme/Layout', () => 'Layout', { virtual: true });
jest.mock('@docusaurus/useDocusaurusContext', () => () => DOCUSAURUS_CTX, { virtual: true });


describe('RepositoriesPage', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<RepositoriesPage/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
