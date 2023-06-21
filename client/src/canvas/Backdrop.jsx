import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.3]}
    >
      <RandomizedLight
        amount={4}
        radius={7}
        intensity={0.75}
        ambient={0.25}
        position={[2, 4, 3]}
      />
      {/* <RandomizedLight amount={4} /> */}
    </AccumulativeShadows>
  );
};

export default Backdrop;
