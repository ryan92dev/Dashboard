import React from "react";
import { AiOutlineInfoCircle, AiOutlinePushpin } from "react-icons/ai";

const PublishOptions = ({ handlePublish }) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg h-max bg-secondary">
      <div>
        <h3 className="mb-2 text-primary">Publish</h3>
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex items-center justify-center w-full border rounded-lg text-primary">
          <button className="px-2 py-2 text-xs">Save Draft</button>
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg text-primary">
          <button className="px-4 py-2 text-xs">Preview</button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2">
          <AiOutlineInfoCircle className="text-xl text-tertiary" />
          <p className=" text-tertiary">
            Status :<span className="ml-2 text-primary "> Draft </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <AiOutlinePushpin className="text-xl text-tertiary" />
          <p className=" text-tertiary">
            is Featured :<span className="ml-2 text-primary "> No </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-10 mt-4">
        <div className="flex items-center justify-center w-full text-primary">
          <button className="px-2 py-2 text-xs text-red-500">
            Delete Post
          </button>
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg text-primary bg-button-primary hover:bg-button-hover">
          <button onClick={handlePublish} className="px-4 py-2 text-xs ">
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishOptions;
