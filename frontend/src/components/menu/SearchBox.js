import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <div className="flex items-center border rounded-lg text-primary bg-secondary border-primary ">
      <input
        type="text"
        placeholder="Search"
        className="w-64 h-10 px-2 rounded-lg text-primary bg-secondary focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent"
      />
      <AiOutlineSearch className="mr-4 text-xl" />
    </div>
  );
};

export default SearchBox;
