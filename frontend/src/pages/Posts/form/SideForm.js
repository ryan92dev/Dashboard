import React, { useEffect, useState } from "react";
import DropZone from "../../../components/shared/DropZone";
import FormInput from "../../../components/shared/FormInput";
import RenderFile from "../../../components/shared/RenderFile";
import CategoryTaginput from "./CategoryTaginput";
import PublishOptions from "./PublishOptions";

const SideForm = ({
  file,
  setFile,
  preview,
  setPreview,

  category,
  setCategory,
  tags,
  setTags,
  handlePublish,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <PublishOptions file={file} handlePublish={handlePublish} />
      <div className="flex flex-col flex-1 gap-2 p-4 rounded-lg h-max bg-secondary">
        <div className="flex items-center justify-between">
          <h3 className="flex-1 mb-2 text-primary">Featured Image</h3>
          <div className="flex items-center justify-center text-primary">
            {file ? (
              <button
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                }}
                className="px-2 py-2 text-xs text-red-500"
              >
                Remove Image
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>

        <DropZone
          file={file}
          setFile={setFile}
          preview={preview}
          setPreview={setPreview}
        />
      </div>
      <CategoryTaginput
        items={category}
        setItems={setCategory}
        name="Categories"
        required={true}
      />
      <CategoryTaginput items={tags} setItems={setTags} name="Tags" />
    </div>
  );
};

export default SideForm;
