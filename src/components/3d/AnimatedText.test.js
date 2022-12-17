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


jest.mock('three/examples/jsm/geometries/TextGeometry', () => 'TextGeometry')
jest.mock('three/examples/jsm/loaders/FontLoader', () => {
    return {
        FontLoader: function () {
            return { parse: function () { return 'test_font' } }
        }
    }
})
jest.mock('three/examples/fonts/helvetiker_regular.typeface.json', () => 'helvetiker_regular');
jest.mock('@react-three/fiber', () => {
    return {
        extend: function () {},
        useFrame: function () {},
        useThree: function () {
            return { invalidate: function () {} }
        }
    }
});


import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedText from './AnimatedText';


const TEXT = 'test text'
const SIZE = 3
const COLOR = 'green'
const POS_Y = 2
const STOP_AFTER_LOOPS = 6


it('renders correctly', async () => {
    const tree = renderer
        .create(<AnimatedText text={TEXT} size={SIZE} color={COLOR} positionY={POS_Y} stopAfterLoops={STOP_AFTER_LOOPS}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
