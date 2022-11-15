import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { motion } from "framer-motion";
import SubMenuItems from "./SubMenuItems";

const subItemVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const container2 = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren",
      duration: 0.5,
    },
    transitionEnd: { display: "none" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
      duration: 0.5,
      when: "beforeChildren",
    },
    transitionEnd: { display: "block" },
  },
};

const MenuItems = ({ sidebarOpen, menuitem, subMenuToggle }) => {
  const [subItemOpen, setSubItemOpen] = useState(false);

  const handleSubItemToggle = () => {
    setSubItemOpen(!subItemOpen);
    // subMenuToggle();
  };

  return (
    <>
      <li
        onClick={handleSubItemToggle}
        className="flex items-center justify-between py-2 mb-2 rounded-lg bg-primary"
      >
        <div className="flex items-center">
          <div className="w-full h-full text-primary">
            <MdOutlineDashboard className="my-1 ml-3 text-xl" />
          </div>
          <div className="ml-4">
            <motion.p
              initial={{ opacity: 0, onTransitionEnd: { display: "none" } }}
              animate={
                sidebarOpen
                  ? { opacity: 1, display: "block" }
                  : { opacity: 0, transitionEnd: { display: "none" } }
              }
              transition={{ delay: 0.5 }}
              exit={{ opacity: 0 }}
              className=" text-primary"
            >
              {menuitem.title}
            </motion.p>
          </div>
        </div>
        <div className="mr-4">
          <motion.p
            initial={{ opacity: 0, onTransitionEnd: { display: "none" } }}
            animate={
              sidebarOpen
                ? { opacity: 1, display: "block" }
                : { opacity: 0, transitionEnd: { display: "none" } }
            }
            transition={{ delay: 0.5 }}
            exit={{ opacity: 0 }}
            className="text-xl text-primary"
          >
            <HiChevronDown />
          </motion.p>
        </div>
      </li>
      <motion.div
        variants={container2}
        initial="hidden"
        animate={subItemOpen ? "show" : "hidden"}
        exit="hidden"
      >
        {menuitem?.subRoutes?.map((subMenuItem, index) => {
          return (
            <SubMenuItems
              key={`${index} ${subMenuItem.title}`}
              subMenuItem={subMenuItem}
              subMenuOpen={subItemOpen}
              setSubMenuOpen={setSubItemOpen}
              subItemVariant={subItemVariant}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default MenuItems;
