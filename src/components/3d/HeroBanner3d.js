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
import React from 'react'
import { Canvas } from '@react-three/fiber'
import AnimatedText from './AnimatedText'
import Environment from './Environment'


const CAMERA_POSITION = [0, 2, 9]
const EXPEDIA_BLUE = 'rgb(0, 0, 153)'
const STOP_AFTER_LOOPS = 2

/**
 * 3D animation with ocean waves, sun in the sky, and text that is floating
 * up and down of the water.
 * 
 * Based on this three.js example: https://threejs.org/examples/webgl_shaders_ocean.html 
 */
function HeroBanner3d({title, subtitle}) {
  return (
    <header className={styles.heroBanner}>
      <Canvas camera={{ position: CAMERA_POSITION, far: 50 }} dpr={[1, 2]} frameloop="demand">
        <Environment/>
        <pointLight position={CAMERA_POSITION} intensity={2}/>
        <AnimatedText text={title} size={1.5} color={EXPEDIA_BLUE} positionY={2} stopAfterLoops={STOP_AFTER_LOOPS}/>
        <AnimatedText text={subtitle} size={1} color={EXPEDIA_BLUE} positionY={0} stopAfterLoops={STOP_AFTER_LOOPS}/>
      </Canvas>
    </header>
  )
}

export default HeroBanner3d;
