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

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import HelvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import React, { useEffect, useRef, useState } from 'react'

const FONT = new FontLoader().parse(HelvetikerFont);

extend({ TextGeometry })

/**
 * 3D text with animation moving up and down from a given y position,
 * while it is centered on the x axis. The animation stops after the
 * given number of loops.
 */
function AnimatedText({text,
                       size = 1,
                       color = 'black',
                       positionY = 0,
                       stopAfterLoops = 4}) {
  const thisMesh = useRef()
  const [positionX, setPositionX] = useState(0)
  const [loopsState, setLoopsState] = useState({
    direction: false, // going up or going down
    count: 0,
    active: true
  })
  const { invalidate } = useThree()
  useEffect(() => setPositionX(getCenteredPositionX(thisMesh.current)), []);
  useFrame(() => {
    if (loopsState.active) {
      invalidate() // trigger manual frame render, given that canvas has frameloop="demand"
      const time = performance.now()
      const newY = Math.sin(time * 0.001) + positionY
      const oldY = thisMesh.current.position.y
      thisMesh.current.position.y = newY
      checkForChangeOfDirection(oldY, newY)
    }
  })
  const checkForChangeOfDirection = (oldY, newY) => {
    const deltaY = newY - oldY
    if ((deltaY >= 0 && loopsState.direction) || (deltaY < 0 && !loopsState.direction)) {
      const newDirection = !loopsState.direction
      const newCount = loopsState.count + 1
      setLoopsState({
        direction: newDirection,
        count: newCount,
        active: newCount <= stopAfterLoops
      })
    }
  }
  
  return (
    <mesh ref={thisMesh} position={[positionX, positionY, 0]}>
      <textGeometry args={[text, {font: FONT, size: size, height: 0.15}]} />
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}

export default AnimatedText;

/**
 * Computes the position this mesh should have to be centered on the x axis.  
 */
function getCenteredPositionX(mesh) {
  const width = getWidth(mesh)
  return - width / 2
}

/**
 * Computes the given mesh' width along the x axis.
 */
function getWidth(mesh) {
  mesh?.geometry?.computeBoundingBox()
  const meshSize = new Vector3();
  mesh?.geometry?.boundingBox?.getSize(meshSize)
  return meshSize.x
}
