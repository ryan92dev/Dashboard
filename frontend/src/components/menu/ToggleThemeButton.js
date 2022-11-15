import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSelect, toggleTheme } from "../../features/Theme/themeSlice";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";

const Light = ({ toggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BsMoon onClick={toggle} className="text-xl text-primary" />
    </motion.div>
  );
};

const Dark = ({ toggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BsSun onClick={toggle} className="text-xl text-primary" />
    </motion.div>
  );
};

const ToggleThemeButton = () => {
  const theme = useSelector(themeSelect);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={toggle}>
      {theme === "dark" ? (
        <Dark handleToggleTheme={toggle} />
      ) : (
        <Light handleToggleTheme={toggle} />
      )}
    </button>
  );
};

export default ToggleThemeButton;
