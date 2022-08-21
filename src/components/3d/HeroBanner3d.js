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


import React from 'react'
import { Canvas } from '@react-three/fiber'
import AnimatedText from './AnimatedText';
import AnimatedStar from './AnimatedStar';

const CAMERA_POSITION = [0, 0.5, 5]
const EXPEDIA_BLUE = 'rgb(0, 0, 153)'
const TITLE = 'Expedia Group'
const SUBTITLE = 'Open Source'
const STAR_RADIUS = 1
const STAR_DELAY = 3000

function HeroBanner3d() {
  return (
    <Canvas camera={{ position: CAMERA_POSITION }} dpr={[1, 2]} mode="concurrent">
      <pointLight position={CAMERA_POSITION} />
      <AnimatedText text={TITLE} size={1.5} color={EXPEDIA_BLUE} startPosition={[-100, 1, 0]}/>
      <AnimatedText text={SUBTITLE} size={1} color={EXPEDIA_BLUE} startPosition={[100, -1, 0]}/>
      <AnimatedStar startPosition={[100, 100, 50]} endPosition={[7, -2, 0]} radius={STAR_RADIUS} delay={STAR_DELAY}/>
      <AnimatedStar startPosition={[-100, 100, 50]} endPosition={[-7, -2, 0]} radius={STAR_RADIUS} delay={STAR_DELAY}/>
    </Canvas>
  );
}

export default HeroBanner3d;
