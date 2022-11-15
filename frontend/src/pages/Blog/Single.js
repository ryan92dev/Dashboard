import React from "react";
import Navbar from "../../components/shared/blog/Navbar";
import RelatedPost from "./RelatedPost";

const BlogSingle = () => {
  return (
    <div className="bg-primary">
      <Navbar />

      <div className="w-full mt-24">
        <div className="w-auto mx-6 md:max-w-6xl xl:mx-auto">
          <div className="flex flex-col">
            <div className="mx-auto md:max-w-5xl">
              <h1 className="text-4xl font-bold leading-normal tracking-wide text-primary ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, quod, voluptatum, voluptate quibusdam voluptates
                necessitatibus quidem voluptas quos dolorum quia.
              </h1>

              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center h-full space-x-2">
                    <div className="w-10 h-10 rounded-full bg-secondary">
                      {/* Image */}
                    </div>
                    <p className="text-sm text-gray-400">
                      By{" "}
                      <span className="font-semibold text-primary">Admin</span>
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
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Image */}

            <div className="mt-10">
              <div className="w-full h-[500px] rounded-lg bg-secondary"></div>
            </div>

            {/* Blog Content */}
            <div className="max-w-5xl mx-auto mt-10">
              <p className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, quod, voluptatum, voluptate quibusdam voluptates
                necessitatibus quidem voluptas quos dolorum quia. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam quae,
                quod, voluptatum, voluptate quibusdam voluptates necessitatibus
                quidem voluptas quos dolorum quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam quae, quod, voluptatum,
                voluptate quibusdam voluptates necessitatibus quidem voluptas
                quos dolorum quia. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam quae, quod, voluptatum, voluptate
                quibusdam voluptates necessitatibus quidem voluptas quos dolorum
                quia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, quod, voluptatum, voluptate quibusdam voluptates
                necessitatibus quidem voluptas quos dolorum quia.
              </p>
              <p className="mt-6 text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, quod, voluptatum, voluptate quibusdam voluptates
                necessitatibus quidem voluptas quos dolorum quia. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-6 text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, quod, voluptatum, voluptate quibusdam voluptates
                necessitatibus quidem voluptas quos dolorum quia.
              </p>
            </div>

            {/* Related Post */}

            <RelatedPost />

            {/* Author */}

            <div className="max-w-5xl mx-auto mt-10">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-secondary"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Admin</h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quae, quod, voluptatum, voluptate quibusdam
                    voluptates necessitatibus quidem voluptas quos dolorum quia.
                  </p>
                </div>
              </div>
            </div>

            {/* Comments */}

            <div className="max-w-5xl mx-auto mt-10">
              <h3 className="text-2xl font-semibold text-primary">Comments</h3>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      Admin
                    </h3>
                    <p className="text-sm text-gray-400">12th March, 2021</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <i className="fas fa-reply"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae, quod, voluptatum, voluptate quibusdam voluptates
                necessitatibus quidem voluptas quos dolorum quia.
              </p>
            </div>

            {/* Comment Form */}
            <div className="max-w-5xl mx-auto mt-10">
              <h3 className="text-2xl font-semibold text-primary">
                Leave a Comment
              </h3>
              <form className="mt-10">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-lg text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="px-4 py-2 rounded-lg bg-secondary"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-lg text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="px-4 py-2 rounded-lg bg-secondary"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-lg text-gray-400">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      className="px-4 py-2 rounded-lg bg-secondary"
                    ></textarea>
                  </div>
                </div>

                <button className="px-6 py-2 mt-6 text-lg font-semibold text-white rounded-lg bg-primary hover:bg-primary-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
