import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Laptop({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/laptop.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.palette} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['palette.001']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials['palette.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/laptop.gltf')
