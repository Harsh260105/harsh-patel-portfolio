import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/free_-_skybox_anime_sky.glb'
// import skyScene from '../assets/3d/milkyway.glb'
// import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
  
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if(isRotating) {
        skyRef.current.rotation.y += 0.15 * delta
      }
    })

    // Check if we're using milkyway model
    const isMilkyway = skyScene.includes('milkyway');

    return (
    <mesh ref = {skyRef} 
      position={isMilkyway ? [0, -5, 0] : [0, 0, 0]}
      scale={isMilkyway ? 100 : 1}
    >
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky