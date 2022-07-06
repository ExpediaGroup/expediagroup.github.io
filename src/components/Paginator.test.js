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
import Paginator from './Paginator';

jest.mock('react-paginate', () => 'ReactPaginate');

const myPageClickHandler = (event) => {};

it('renders nothing if page count is zero', () => {
    const tree = renderer
        .create(<Paginator pageCount={0}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders nothing if page count is one', () => {
    const tree = renderer
        .create(<Paginator pageCount={1}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('delegates to ReactPaginate if page count is greater than one', () => {
    const tree = renderer
        .create(<Paginator pageCount={2} handlePageClick={myPageClickHandler}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
