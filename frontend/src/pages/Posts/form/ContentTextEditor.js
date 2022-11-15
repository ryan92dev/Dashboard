import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image"],

  //   [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const ContentTextEditor = () => {
  const [quill, setQuill] = useState();
  console.log("quill", quill);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
        history: { delay: 2000, maxStack: 500, userOnly: true },
        syntax: {
          highlight: (text) => hljs.highlightAuto(text).value,
        },
        // Image Handler
      },
    });

    const imageHandler = () => {
      const editor = quill.getEditor();

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

    setQuill(q);
  }, []);

  useEffect(() => {
    if (quill == null) return;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        console.log("An API call could be made here!");
      }

      console.log("delta", delta);
    });

    return () => {
      quill.off("text-change");
    };
  }, [quill]);

  return (
    <div className="flex flex-col flex-1 gap-2 rounded-lg -py-2 h-max bg-secondary">
      <div className="relative w-full px-3 py-4 mt-6 border border-gray-400 rounded-lg h-max hover:border-white focus-within:border-green-500">
        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-primary px-1 bg-secondary">
          Content *
        </span>
        <div
          className="text-lg text-primary placeholder:text-primary"
          ref={wrapperRef}
          id="text-editor"
        ></div>
      </div>
    </div>
  );
};

export default ContentTextEditor;
