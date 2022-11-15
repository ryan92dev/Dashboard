import React, { useEffect, useState } from "react";
import FormInput from "../../../components/shared/FormInput";
import ContentRichTextEditor from "./ContentRichTextEditor";
import ContentTextEditor from "./ContentTextEditor";

const MainForm = ({
  title,
  setTitle,
  excerpt,
  setExcerpt,
  content,
  setContent,
  featured,
  setFeatured,
}) => {
  const [seo, setSeo] = useState(false);

  return (
    <div className="flex flex-col flex-none px-4 rounded-lg bg-secondary">
      <FormInput
        labelName="Title"
        name="Title"
        required={true}
        type="text"
        value={title}
        setValue={setTitle}
        placeholder="Enter title"
      />

      <FormInput
        labelName="Excerpt"
        name="Excerpt"
        required={true}
        type="text"
        value={excerpt}
        setValue={setExcerpt}
        placeholder="Write a short description of the post"
      />

      <div className="flex flex-col w-full px-3 py-4 mt-6 mb-4 border border-gray-400 rounded-lg hover:border-white focus-within:border-green-500">
        <div className="flex">
          <label htmlFor="body" className="block mr-6 text-sm text-primary">
            Featured
          </label>
          <input
            type="checkbox"
            name="featured"
            id="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
        </div>
        <p className="mt-4 text-xs text-secondary">
          <span className="mr-1 text-red-500">* </span> Featured Post will show
          in the featured section of the home page
        </p>
      </div>
      {/* <ContentTextEditor /> */}
      <div>
        <ContentRichTextEditor
          name="content"
          content={content}
          setContent={setContent}
        />
      </div>
      <div
        onChange={() => setSeo(!seo)}
        className="flex flex-col w-full px-3 py-4 mt-6 mb-4 border border-gray-400 rounded-lg hover:border-white focus-within:border-green-500"
      >
        <div className="flex">
          <label htmlFor="body" className="block mr-6 text-sm text-primary">
            SEO Options
          </label>
          <input type="checkbox" name="featured" id="featured" />
        </div>

        {seo && (
          <div>
            <FormInput labelName="SEO Title" name="SEO Title" type="text" />

            <FormInput
              labelName="SEO Description"
              name="SEO Description"
              type="text"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainForm;
