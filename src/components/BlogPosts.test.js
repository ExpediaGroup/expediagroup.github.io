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
import BlogPosts from './BlogPosts';

const POSTS = [{
    title: 'My Post Title',
    creator: 'Mary Krismass',
    link: 'https://my/post',
    date: 'Jan 01, 2022',
    imageUrl: 'https://my/post/image.jpg'
}];

it('renders correctly', () => {
    const tree = renderer
        .create(<BlogPosts posts={POSTS}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
