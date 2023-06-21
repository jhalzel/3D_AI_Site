import React from "react";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <button className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            console.log(e.target.files[0]), setFile(file);
          }}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </button>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => {
            readFile("logo"), console.log(file);
          }}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
