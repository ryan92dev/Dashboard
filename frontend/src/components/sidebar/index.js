import React from "react";
import MenuItems from "../sidebar/MenuItems";
import { AnimatePresence, motion } from "framer-motion";
import SubMenuItems from "./SubMenuItems";

const MenuItemsList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
    subRoutes: [
      {
        title: "About 1",
        url: "/about/1",
      },
      {
        title: "About 2",
        url: "/about/2",
      },
    ],
  },
  {
    title: "Posts",
    url: "/posts",
    subRoutes: [
      {
        title: "Create Post",
        url: "/posts/create",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const MenuSidebar = {
  open: {
    width: "240px",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    width: "60px",
    transition: {
      duration: 0.5,
      delay: 1,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

const SidebarMenu = ({
  sidebarOpen,
  setSidebarOpen,
  subMenuOpen,
  setSubMenuOpen,
}) => {
  const subMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <motion.div
      initial="closed"
      animate={sidebarOpen ? "open" : "closed"}
      variants={MenuSidebar}
      exit="closed"
      className="flex flex-col w-64 h-full px-2 py-4 bg-secondary"
    >
      {MenuItemsList.map((menuitem, index) => {
        if (menuitem.subRoutes) {
          return (
            <AnimatePresence key={`${index} ${menuitem.title}`} mode="wait">
              <MenuItems
                subMenuToggle={subMenuToggle}
                menuitem={menuitem}
                sidebarOpen={sidebarOpen}
              />
            </AnimatePresence>
          );
        }

        return (
          <MenuItems
            key={`${index} ${menuitem.title}`}
            menuitem={menuitem}
            sidebarOpen={sidebarOpen}
          />
        );
      })}
    </motion.div>
  );
};

export default SidebarMenu;
