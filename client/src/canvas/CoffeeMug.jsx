import React, { useEffect } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Box3, Vector3 } from "three";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import { state } from "../store/index";

const printGLBNodeName = (glbPath) => {
  const { nodes } = useGLTF(glbPath);
  const nodeNames = Object.keys(nodes);
  console.log("GLB node names:", nodeNames);
};

const CoffeeMug = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/coffee_mug_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Apply colors smoothly to the Ceramic material of the CoffeeMug object
  useFrame((state, delta) => {
    easing.dampC(materials.Ceramic.color, snap.color, 0.25, delta);
  });

  //Calculate the bounding box of the CoffeeMug object
  const box = new Box3().setFromObject(nodes.Cup);
  const size = box.getSize(new Vector3());
  const center = box.getCenter(new Vector3());

  // Print the names of the nodes in the GLB file
  printGLBNodeName("/coffee_mug_baked.glb");

  // Tracking state changes
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      {nodes.Cup && (
        <mesh
          //   castShadow
          geometry={nodes.Cup.geometry}
          material={materials.Ceramic}
          material-roughness={1}
          dispose={null}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[size.x, size.y, size.z]}
              map={fullTexture}
            />
          )}
          {snap.isLogoTexture && (
            <Decal
              //   position={[0, 0.04, 0.15]}
              position={[
                center.x,
                center.y + size.y * 0.04,
                center.z + size.z * 0.15,
              ]}
              rotation={[0, 0, 0]}
              //   scale={0.65}
              scale={[size.x * 0.65, size.y * 0.65, size.z * 0.65]}
              map={logoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
      )}
    </group>
  );
};

export default CoffeeMug;
