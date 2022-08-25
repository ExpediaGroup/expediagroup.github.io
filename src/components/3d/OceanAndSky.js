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

import * as THREE from 'three'
import { Sky } from '@react-three/drei'
import React, {Suspense, useMemo} from 'react'
import Ocean from './Ocean'

const SUN_ELEVATION = 0.1
const SUN_AZIMUTH = 130

/**
 * Puts together the ocean and the sky with sun at sunset.
 */
function OceanAndSky() {
    const sunPosition = useMemo(() => {
      const phi = THREE.MathUtils.degToRad(90 - SUN_ELEVATION)
	    const theta = THREE.MathUtils.degToRad(SUN_AZIMUTH)
      const pos = new THREE.Vector3()
	    pos.setFromSphericalCoords(1, phi, theta)
      return pos
    })
    return (
      <Suspense fallback={null}>
        <Ocean sunDirection={sunPosition} />
        <Sky scale={10000} sunPosition={sunPosition} turbidity={10} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8} />
      </Suspense>
    )
  }
  
  export default OceanAndSky;
  