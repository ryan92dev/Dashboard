import React from "react";
import FeaturedSmallCard from "../FeaturedPost/FeaturedSmallCard";
import PostCard from "../PostCard";

const LatestPost = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-auto mx-6 md:max-w-6xl xl:mx-auto">
        <h3 className="font-semibold text-primary">Latest Posts</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
