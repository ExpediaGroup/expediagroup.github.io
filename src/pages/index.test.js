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
import Home from './index';

const DOCUSAURUS_CTX = {
    siteConfig: {
        title: 'site title',
        tagLine: 'site tag line',
        customFields: {
            heroConfig: {
                hero2d: {
                    title: 'hero title',
                    subtitle: 'hero subtitle',
                    imageUrl: 'test/image/url'
                },
                hero3d: {
                    enabled: false,
                    title: '3D hero title',
                    subtitle: '3D hero subtitle'
                }
            },
            repositoriesConfig: 'fake-repos-config',
            socialConfig: 'fake-social-config'
        }
    }
}

jest.mock('../components/HeroBanner', () => 'HeroBanner');
jest.mock('../components/3d/HeroBanner3d', () => 'HeroBanner3d');
jest.mock('../components/Repositories', () => 'Repositories');
jest.mock('../components/Social', () => 'Social');
jest.mock('@theme/Layout', () => 'Layout', { virtual: true });
jest.mock('@site/static/repos.json', () => 'fake-repos-data', { virtual: true });
const mockDocusaurusContext = jest.fn();
jest.mock('@docusaurus/useDocusaurusContext', () => () => mockDocusaurusContext(), { virtual: true });


describe('Home', () => {
    it('renders correctly', () => {
        mockDocusaurusContext.mockReturnValue(DOCUSAURUS_CTX);
        const tree = renderer
            .create(<Home/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders with 3D hero banner', () => {
        const ctx = deepCopy(DOCUSAURUS_CTX);
        ctx.siteConfig.customFields.heroConfig.hero3d.enabled = true;
        mockDocusaurusContext.mockReturnValue(ctx);
        const tree = renderer
            .create(<Home/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
