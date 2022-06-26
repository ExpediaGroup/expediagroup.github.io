import React from 'react';
import renderer from 'react-test-renderer';
import SocialFooter from './SocialFooter';

jest.mock('./ArrowLink', () => 'ArrowLink');

const LINK = 'http://test-link';
const TEXT = 'test text';

it('renders correctly', () => {
    const tree = renderer
        .create(<SocialFooter link={LINK} text={TEXT}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
