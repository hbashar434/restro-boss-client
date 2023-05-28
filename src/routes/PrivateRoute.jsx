import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-96"></progress>;
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace >
      {children}
    </Navigate>
  );
};

export default PrivateRoute;
