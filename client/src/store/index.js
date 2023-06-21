import { proxy } from "valtio";

// React context for global state
export const state = proxy({
  intro: true, //homepage or not?
  color: '#EFBD48', //color of the background
  isLogoTexture: true, // is logo displaying on our object or not?
  isFullTexture: false, // is texture the full type or not?
  logoDecal: "./threejs.png", // logo decal
  fullDecal: "./threejs.png", // full decal
});

