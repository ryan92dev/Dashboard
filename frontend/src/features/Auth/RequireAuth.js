import React, { useEffect } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useOutletContext,
} from "react-router-dom";

const RequireAuth = () => {
  const data = useOutletContext();

  const location = useLocation();
  console.log("Require Auth data", data);

  if (!data?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <Outlet context={data} />;
  }
};

export default RequireAuth;
