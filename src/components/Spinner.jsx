import React from "react";

export const Spinner = () => {
  return (
    <div className="m-auto">
        <div className="spinner-grow text-info m-auto" role="status">
            <span className="visually-hidden h1">Loading...</span>
        </div>
    </div>
  );
};
