import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";
import React from "react";
import MenuItems from "../sidebar/MenuItems";
import { Link } from "react-router-dom";

const SubMenuItems = ({
  subItemVariant,
  subMenuOpen,
  setSubMenuOpen,
  subMenuItem,
}) => {
  return (
    <motion.div className="cursor-pointer " variants={subItemVariant}>
      <Link to="posts/create">
        <div className="flex items-center mb-2 ml-3 bg-gray-600 rounded-lg">
          <div className="flex items-center py-2 mx-3 my-1 text-xl text-center text-primary">
            <MdOutlineDashboard className="" />
          </div>
          <span className="text-primary">{subMenuItem.title}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default SubMenuItems;
