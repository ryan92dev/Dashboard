import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { themeSelect, rawSetTheme } from "./features/Theme/themeSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./Router";

const App = () => {
  const theme = useSelector(themeSelect);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        closeOnClick
        newestOnTop
        autoClose={1000}
      />
      <Router />
    </>
  );
};

export default App;
