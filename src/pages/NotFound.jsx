import React from "react";
import { Navbar } from "../components/Navbar";

export const NotFound = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <Navbar />
      <span className="alert alert-danger m-auto h1">404 Not Found</span>
    </div>
  );
};
