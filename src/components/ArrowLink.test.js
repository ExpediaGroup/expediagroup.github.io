import React from 'react';
import renderer from 'react-test-renderer';
import ArrowLink from './ArrowLink';

const LINK = 'http://test-link';

it('renders correctly', () => {
    const tree = renderer
        .create(<ArrowLink link={LINK}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
