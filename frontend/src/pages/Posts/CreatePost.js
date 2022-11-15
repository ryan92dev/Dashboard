import React from "react";
import PostForm from "./PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-col h-full ">
      <div className="flex flex-none items-center  h-16 border-b-[0.5px] shadow-md border-primary">
        <h1 className="mx-6 text-xl font-bold text-primary">Create Post</h1>
      </div>

      <div className="overflow-y-auto">
        <div className="flex max-w-6xl mx-12 mt-6 xl:mx-auto">
          <PostForm />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
