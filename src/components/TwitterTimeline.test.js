/**
 * @jest-environment jsdom
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
