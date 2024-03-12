// components/InfinityLogo.js
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Image from 'next/image';


const InfinityLogo = () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.002;
  });

  const particles = new Array(2500).fill().map(() => {
    const particle = new THREE.Vector3(
      (Math.random() - 0.5) * window.innerWidth,
      (Math.random() - 0.5) * window.innerHeight,
      (Math.random() - 0.5) * window.innerHeight
    );
    return particle;
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
      
    </group>
  );
};

export default InfinityLogo;
