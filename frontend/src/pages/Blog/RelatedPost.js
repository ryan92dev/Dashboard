import React from "react";

const RelatedPost = () => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-primary">Related Posts</h3>
      <div className="flex flex-col mt-10 space-y-10">
        <div className="flex items-center space-x-4">
          <div className="w-1/3 h-[200px] rounded-lg bg-secondary"></div>
          <div className="w-2/3">
            <h3 className="text-xl font-semibold text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, quod, voluptatum, voluptate quibusdam voluptates
              necessitatibus quidem voluptas quos dolorum quia.
            </h3>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center h-full space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary">
                    {/* Image */}
                  </div>
                  <p className="text-sm text-gray-400">
                    By <span className="font-semibold text-primary">Admin</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-400">
                    On{" "}
                    <span className="font-semibold text-primary">
                      12th March, 2021
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-400">
                    In{" "}
                    <span className="font-semibold text-primary">
                      Web Design
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <h3 className="text-sm font-semibold text-primary">
                  Share this post:{" "}
                </h3>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
