import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`btn btn-primary text-white bg-gradient-to-r from-primary to-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
