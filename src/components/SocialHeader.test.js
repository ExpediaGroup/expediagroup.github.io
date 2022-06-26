import React from 'react';
import renderer from 'react-test-renderer';
import SocialHeader from './SocialHeader';

const TITLE = 'test title';

it('renders correctly', () => {
    const tree = renderer
        .create(<SocialHeader title={TITLE}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
