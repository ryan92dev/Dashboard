import React, { useState } from "react";
import MainForm from "./form/MainForm";
import SideForm from "./form/SideForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreatePostMutation } from "../../features/Post/postApiSlice";

const PostForm = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [featured, setFeatured] = useState(false);

  console.log("content", content);

  const [createPost, { isLoading, isError, isSuccess }] =
    useCreatePostMutation();

  const handlePublish = async (e) => {
    e.preventDefault();

    console.log("title", title);
    console.log("excerpt", excerpt);
    console.log("content", content);
    console.log("category", category);
    console.log("tags", tags);
    console.log("featured", featured);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("image", file);

    await createPost(formData).unwrap((result) => {
      console.log("result", result);
    });
    // if (result.status === 200) {
    //   console.log("success");
    setTitle("");
    setExcerpt("");
    setContent("");
    setCategory([]);
    setTags([]);
    setFile(null);
    setPreview(null);
    setFeatured(false);
    // }
    // });
  };

  return (
    <div className="flex flex-col w-full ">
      <form className="flex flex-col gap-6 mb-6 xl:flex-row">
        <div className="flex-[2]  ">
          <MainForm
            title={title}
            setTitle={setTitle}
            excerpt={excerpt}
            setExcerpt={setExcerpt}
            content={content}
            setContent={setContent}
            featured={featured}
            setFeatured={setFeatured}
          />
        </div>
        <div className="flex-[1]">
          <SideForm
            file={file}
            setFile={setFile}
            preview={preview}
            setPreview={setPreview}
            handlePublish={handlePublish}
            category={category}
            setCategory={setCategory}
            tags={tags}
            setTags={setTags}
          />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
