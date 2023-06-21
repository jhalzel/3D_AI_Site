import React from "react";

import { useSnapshot } from "valtio";
import { state } from "../store";
import { getContrastingColor } from "../config/helpers";
import {AIPicker, ColorPicker, FilePicker, Tab} from '../components';


const CustomButton = ({ type, title, customStyle, handleClick }) => {
  const snap = useSnapshot(state);
  
  const generateStyle = (type) => {
    if (type === 'filled') {
      console.log(snap.color)
      console.log(snap.intro)
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      }
    }
    else if (type === 'outline') {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md font-bold text-sm ${customStyle}`} 
      style={generateStyle(type)}
      onClick={handleClick}
      customStyles={customStyle}
    >
      {title}
    </button>
  );
};
    
export default CustomButton;
