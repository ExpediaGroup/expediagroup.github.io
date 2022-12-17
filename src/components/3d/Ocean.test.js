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

jest.mock('three/examples/jsm/objects/Water', () => {
    return { Water: 'Water' }
})
jest.mock('@react-three/fiber', () => {
    return {
        extend: function () {},
        useFrame: function () {},
        useLoader: function () { return {} },
        useThree: function () {
            return { }
        }
    }
});

import React from 'react';
import renderer from 'react-test-renderer';
import Ocean from './Ocean';

import {Vector3} from 'three'


const SUN_DIRECTION = new Vector3(1, 2, 3)
const PLANE_GEOMETRY_UUID = "123456789"


it('renders correctly', async () => {
    const tree = renderer
        .create(<Ocean sunDirection={SUN_DIRECTION}/>)
        .toJSON();
    tree.props.args[0].uuid = PLANE_GEOMETRY_UUID
    expect(tree).toMatchSnapshot();
});
