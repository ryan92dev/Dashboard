import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-16 bg-secondary">
      <div className="w-auto pt-6 mx-6 md:max-w-6xl xl:mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col">
            <h3 className="font-semibold text-primary">About Us</h3>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, quod, voluptatum, voluptate quibusdam voluptates
              necessitatibus quidem voluptas quos dolorum quia.
            </p>

            <div className="flex mt-4 space-x-4">
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

            <div className="mt-4 text-sm text-gray-400">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt"></i> 1234 Street Name, City
                Name, United States
              </p>
              <p className="mb-2">
                <i className="fas fa-phone-alt"></i> +1 234 567 890
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:" className="hover:text-primary"></a>
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-semibold text-primary">Popular Tags</h3>
            <div className="flex flex-wrap gap-2 mt-4 text-sm text-gray-400">
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                React
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                JavaScript
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Node
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Express
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                MongoDB
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Next.js
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Tailwind
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                CSS
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                HTML
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Python
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Django
              </a>
              <a href="#" className="px-2 py-1 bg-gray-800 hover:bg-primary">
                Flask
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-primary">Contact Us</h3>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="font-semibold text-primary">Newsletter</h3>
              <p className="mt-2 text-sm text-gray-400">
                Subscribe to our newsletter to get the latest updates.
              </p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 text-sm text-gray-400 bg-gray-800 border border-gray-800 rounded-md focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white uppercase rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
