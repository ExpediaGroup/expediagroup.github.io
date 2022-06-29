/**
 * @jest-environment jsdom
 */

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
import TwitterTimeline from './TwitterTimeline';

const TWITTER_ACCOUNT_LINK = 'http://test-twitter-account';
const TWITTER_WIDGET_LINK = 'https://platform.twitter.com/widgets.js';

it('renders a skelethon anchor tag that will be hydrated by Twitter script', () => {
    let component;
    renderer.act(() => {
        component = renderer.create(<TwitterTimeline twitterLink={TWITTER_ACCOUNT_LINK}/>);
    });
    expect(component.toJSON()).toMatchSnapshot();
});

it('adds Twitter script to the body', () => {
    jest.spyOn(document.body, 'appendChild');

    renderer.act(() => {
        renderer.create(<TwitterTimeline twitterLink={TWITTER_ACCOUNT_LINK}/>);
    });

    const appendedScript = document.body.appendChild.mock.calls[0][0];
    expect(appendedScript).toBeInstanceOf(HTMLScriptElement);
    expect(appendedScript).toHaveProperty("src", TWITTER_WIDGET_LINK);
});
