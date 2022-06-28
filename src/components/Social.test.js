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
import Social from './Social';

jest.mock('./TwitterTimeline', () => 'TwitterTimeline');
jest.mock('./BlogPosts', () => 'BlogPosts');
jest.mock('./SocialHeader', () => 'SocialHeader');
jest.mock('./SocialFooter', () => 'SocialFooter');
jest.mock('@site/static/posts.json', () => [], { virtual: true });
jest.mock('@site/static/img/careers.jpg', () => 'careers-image-url', { virtual: true });

const SOCIAL_CONFIG = {
    blog: {
        title: 'blog title',
        link: 'https://my/blog',
        footerText: 'blog footer'
    },
    careers: {
        title: 'careers title',
        link: 'https://my/careers',
        footerText: 'careers footer'
    },
    twitter: {
        title: 'twitter title',
        link: 'https://my/twitter',
        footerText: 'twitter footer'
    }
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Social socialConfig={SOCIAL_CONFIG}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
