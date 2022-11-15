import React from "react";
import FeaturedBigCard from "./FeaturedBigCard";
import FeaturedSmallCard from "./FeaturedSmallCard";
import FeaturedTitle from "./FeaturedTitle";

const FeaturedPost = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-auto mx-6 md:max-w-6xl xl:mx-auto">
        <FeaturedTitle />

        {/* Featured Card Section */}
        <div className="flex flex-col gap-3 mt-6 lg:flex-row">
          <div className="p-2 rounded-lg shadow-lg lg:w-2/3 bg-secondary">
            <FeaturedBigCard />
          </div>
          <div className="flex flex-col gap-6 lg:w-1/3 lg:flex-row">
            <div className="p-2 rounded-lg shadow-lg bg-secondary">
              <FeaturedSmallCard />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6 lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/3 lg:flex-row">
            <div className="p-2 rounded-lg shadow-lg bg-secondary">
              <FeaturedSmallCard />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-1/3 lg:flex-row">
            <div className="p-2 rounded-lg shadow-lg bg-secondary">
              <FeaturedSmallCard />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-1/3 lg:flex-row">
            <div className="p-2 rounded-lg shadow-lg bg-secondary">
              <FeaturedSmallCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
