import React from 'react';
import renderer from 'react-test-renderer';
import SocialHeader from './SocialHeader';

it('renders correctly', () => {
    const tree = renderer
        .create(<SocialHeader title="foo"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
