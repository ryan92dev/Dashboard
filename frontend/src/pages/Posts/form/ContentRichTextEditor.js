import React, { useMemo, useRef } from "react";
import hljs from "highlight.js";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
// import "highlight.js/styles/darcula.css";

import "highlight.js/styles/atom-one-dark.css";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});

const ContentRichTextEditor = ({ content, setContent, name }) => {
  const quillRef = useRef();

  const imageHandler = () => {
    const editor = quillRef.current.getEditor();

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (
        file !== null &&
        file !== undefined &&
        file !== "" &&
        /^image\//.test(file.type)
      ) {
        console.log("file", file);
        const formData = new FormData();
        formData.append("image", file);
        // const res = await ImageUpload(formData); // upload data into server or aws or cloudinary
        // const url = res?.data?.url;
        const url = "https://picsum.photos/200/300";
        editor.insertEmbed(editor.getSelection(), "image", url);
      }
    };
  };

  const modules = useMemo(
    () => ({
      syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
      },
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  // Save Content to Formik
  const handleChange = (content, delta, source, editor) => {
    setContent(content);
  };

  return (
    <div className="flex flex-col flex-1 gap-2 rounded-lg -py-2 h-max bg-secondary">
      <div className="relative w-full px-3 py-4 mt-6 border border-gray-400 rounded-lg h-max hover:border-white focus-within:border-green-500">
        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-primary px-1 bg-secondary">
          Content *
        </span>
        <ReactQuill
          className="text-lg text-primary"
          theme="snow"
          ref={quillRef}
          modules={modules}
          value={content}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ContentRichTextEditor;
