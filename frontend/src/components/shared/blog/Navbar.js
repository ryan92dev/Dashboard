import React from "react";
import { AiOutlineMedium } from "react-icons/ai";
import ToggleThemeButton from "../../menu/ToggleThemeButton";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="w-full h-24 ">
        <div className="w-full h-full max-w-6xl mx-auto">
          <div className="flex items-center justify-center w-full h-full gap-2 ">
            <div className="border rounded-md border-primary">
              <AiOutlineMedium className="p-1 text-4xl text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-wide text-primary">
              Mern Blog
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-14 bg-secondary">
        <div className="flex items-center justify-between w-full h-full max-w-6xl mx-auto">
          <ul className="flex flex-1 gap-8 lg:gap-14 xl:gap-16 ml-6 xl:ml-0 mr-8 text-primary max-w-[70%]">
            <li className="text-sm font-semibold tracking-wide text-primary">
              Home
            </li>
            <li className="text-sm font-semibold tracking-wide text-primary">
              Posts
            </li>
            <li className="text-sm font-semibold tracking-wide text-primary">
              Categories
            </li>
            <li className="text-sm font-semibold tracking-wide text-primary">
              About
            </li>
            <li className="text-sm font-semibold tracking-wide text-primary">
              Contact
            </li>
          </ul>

          <div className="hidden gap-3 mr-6 xl:mr-0 md:flex">
            <div className="flex items-center mr-4">
              <ToggleThemeButton />
            </div>
            <button className="px-4 py-2 text-sm font-semibold rounded-md text-button-text bg-button-primary">
              Login
            </button>

            <button className="px-4 py-2 text-sm font-semibold border rounded-md border-primary text-primary">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
