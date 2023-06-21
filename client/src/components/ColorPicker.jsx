import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import { state } from "../store/index";

const ColorPicker = () => {
    const snap = useSnapshot(state);
  return <div className="absolute left-full ml-3">
    <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
            "#000000", "ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#c0c0c0", "#808080", "#800000", "#808000", "#008000", "#800080", "#008080", "#000080"
        ]}
        onChange={(color) => (state.color = color.hex)}
        //generic color presets
    /> 
  </div>;
};

export default ColorPicker;
