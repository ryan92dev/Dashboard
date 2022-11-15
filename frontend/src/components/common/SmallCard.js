import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";

const SmallCard = () => {
  return (
    <div className="flex flex-col p-3 border rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col mr-8">
          <h3 className="text-sm tracking-wide uppercase text-secondary">
            Total Posts
          </h3>
          <p className="text-2xl text-primary">50</p>

          <p className="mt-4 text-xs text-gray-600">View All</p>
        </div>
        <div className="">
          <HiOutlineDocumentText className="w-16 h-16 p-1 font-thin bg-green-500 border rounded-lg text-primary" />
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
