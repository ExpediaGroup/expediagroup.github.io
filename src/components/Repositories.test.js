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
import Repositories from './Repositories';

jest.mock('./ArrowLink', () => 'ArrowLink');

const REPOS_DATA = [{
    name: 'repo-b',
    description: 'Repo B description',
    imageUrl: 'https://repo/b/image',
    repoUrl: 'https://repo/b',
    featured: false
}, {
    name: 'repo-a',
    description: 'Repo A description',
    imageUrl: 'https://repo/a/image',
    repoUrl: 'https://repo/a',
    featured: true
}];
const REPOS_CONFIG = {
    exploreMoreText: 'Explore more',
    exploreOnGithubText: 'Explore on github',
    githubReposLink: 'https://github/repos',
    repositoriesPage: {
        link: 'https://all/repos'
    }
}

it('renders featured repos sorting alphabetically', () => {
    const tree = renderer
        .create(<Repositories reposData={REPOS_DATA} reposConfig={REPOS_CONFIG} showOnlyFeatured={true}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders all repos sorting alphabetically', () => {
    const tree = renderer
        .create(<Repositories reposData={REPOS_DATA} reposConfig={REPOS_CONFIG}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
