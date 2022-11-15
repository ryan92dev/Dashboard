import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import RenderFile from "./RenderFile";

const DropZone = ({ file, setFile, preview, setPreview }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "image/*": [".jpeg", ".png"],
        // "audio/*": [".mpeg"],
      },
    });

  const content = ({ isDragReject }) => {
    if (file) {
      return (
        <RenderFile
          format={file.type.split("/")[1]}
          sizeInBytes={file.size}
          name={file.name}
          preview={preview}
        />
      );
    } else if (isDragReject) {
      return (
        <div className="flex items-center justify-center h-32 p-4">
          <p className="text-sm text-red-500">
            Sorry, Only image files are accepted
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center h-32 p-4">
          <p className="text-sm text-secondary">
            Drag and drop your image here or click to select a file to upload.
          </p>
        </div>
      );
    }
  };

  return (
    <div
      className="w-full cursor-pointer rounded-xl focus:outline-none"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div
        className={
          "flex flex-col items-center justify-center h-max min-h-[128px] space-y-3 border border-dashed border-yellow-light rounded-md " +
          (isDragReject === true ? "border-red-500" : "") +
          (isDragAccept === true ? "border-green-500" : "")
        }
      >
        {content({ isDragReject: isDragReject })}
      </div>
    </div>
  );
};

export default DropZone;
