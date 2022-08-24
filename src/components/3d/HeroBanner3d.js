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


import styles from './HeroBanner3d.module.css'
import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import AnimatedText from './AnimatedText'
import Ocean from './Ocean'
import { Sky } from '@react-three/drei'


const CAMERA_POSITION = [0, 2, 9]
const EXPEDIA_BLUE = 'rgb(0, 0, 153)'
const TITLE = 'Expedia Group'
const SUBTITLE = 'Open Source'

function HeroBanner3d() {
  return (
    <header className={styles.heroBanner}>
      <Canvas camera={{ position: CAMERA_POSITION }} dpr={[1, 2]}>
        <ambientLight/>
        <AnimatedText text={TITLE} size={1.5} color={EXPEDIA_BLUE} startPosition={[-100, 3, 0]}/>
        <AnimatedText text={SUBTITLE} size={1} color={EXPEDIA_BLUE} startPosition={[100, 1, 0]}/>
        <Suspense fallback={null}>
          <Ocean />
        </Suspense>
        <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      </Canvas>
    </header>
  );
}

export default HeroBanner3d;
