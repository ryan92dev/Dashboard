import React from "react";
import Categories from "../../components/shared/blog/Categories";
import FeaturedPost from "../../components/shared/blog/FeaturedPost";
import Footer from "../../components/shared/blog/Footer";
import HeroSlider from "../../components/shared/blog/HeroSlider";
import LatestPost from "../../components/shared/blog/LatestPost";
import Navbar from "../../components/shared/blog/Navbar";

const Blog = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <HeroSlider />
      <FeaturedPost />

      <Categories />

      <LatestPost />

      <Footer />
    </div>
  );
};

export default Blog;
