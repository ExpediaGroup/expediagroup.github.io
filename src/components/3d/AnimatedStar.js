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

import { Shape, Vector2 } from 'three'
import { useSpring, animated } from "@react-spring/three"
import React from 'react'
import { useMemo } from 'react'

/**
 * 3D star with animation moving from a start position to an end position
 * and rotating on itself.
 */
function AnimatedStar({points = 5, radius = 2,
               color = 'yellow',
               borderColor = 'orange',
               startPosition = [100, 20, 0],
               endPosition = [0, 0, 0],
               delay = 0}) {
    const shape = useMemo(() => starShape(points, radius), [points, radius])
    const extrudeSettings = {
        depth: 0.1,
        bevelSize: 0.1
    }
    const { position } = useSpring({
        from: { position: startPosition },
        to: { position: endPosition },
        config: { mass: 5, tension: 70 },
        delay: delay
    })
    const { rotation } = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [0, 2 * Math.PI, 0] },
        loop: true,
        config: { mass: 1, friction: 10, tension: 30}
    })
    return (
        <animated.mesh position={position} rotation={rotation}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshStandardMaterial attachArray="material" color={color}/>
            <meshStandardMaterial attachArray="material" color={borderColor}/>
        </animated.mesh>
  )
}

export default AnimatedStar

/**
 * Builds the 2D shape of a star with the given number of
 * vertices and radius. It uses trigonometry to compute the
 * (x, y) positions of its points looping around a circle.
 */
function starShape(numOuterPoints, outerRadius) {
    const points = [], innerRadius = outerRadius / 2;
    for (let i = 0; i < numOuterPoints * 2; i++) {
        const radius = i % 2 === 1 ? innerRadius : outerRadius;
        const angle = i / numOuterPoints * Math.PI + Math.PI / 2;
        points.push(new Vector2(Math.cos(angle) * radius, Math.sin(angle) * radius));
    }
    return new Shape(points);
}
