import React from "react";
import { AiOutlineTag } from "react-icons/ai";

const FeaturedTitle = () => {
  return (
    <div className="flex justify-between ">
      <h3 className="font-semibold text-primary">Featured Post</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center ">
          <AiOutlineTag className="inline-block mr-1 text-primary" />

          <h3 className="text-sm text-primary ">Popular Tags: </h3>
        </div>
        <ul className="flex text-sm text-primary">
          <li className="mr-2 transition duration-300 cursor-pointer text-tertiary hover:text-primary">
            #React
          </li>
          <li className="mr-2 transition duration-300 cursor-pointer text-tertiary hover:text-primary">
            #Node
          </li>

          <li className="mr-2 transition duration-300 cursor-pointer text-tertiary hover:text-primary">
            #MongoDB
          </li>
          <li className="mr-2 transition duration-300 cursor-pointer text-tertiary hover:text-primary">
            #Express
          </li>
          <li className="mr-2 transition duration-300 cursor-pointer text-tertiary hover:text-primary">
            #JavaScript
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturedTitle;
