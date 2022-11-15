import React from "react";

const RenderFile = ({ format, sizeInBytes, name, preview }) => {
  return (
    <div className="flex items-center justify-center w-full p-4 my-2">
      <img alt="preview" className="w-2/3 aspect-square" src={preview} />
    </div>
  );
};

export default RenderFile;
