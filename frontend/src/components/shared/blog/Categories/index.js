import React from "react";

const Categories = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-auto mx-6 md:max-w-6xl xl:mx-auto">
        <h3 className="font-semibold text-primary">Categories</h3>

        <div>
          <ul className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-2 lg:grid-cols-4">
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              React
            </li>
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              Node
            </li>
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              MongoDB
            </li>
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              Express
            </li>

            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              JavaScript
            </li>
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              TypeScript
            </li>
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              Next.js
            </li>
            <li className="flex items-center justify-center h-32 text-2xl font-semibold rounded-lg text-primary bg-secondary">
              Tailwind CSS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
