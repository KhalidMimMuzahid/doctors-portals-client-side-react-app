import React from "react";

const EachInfo = ({ eachInfo }) => {
  const { title, description, logo, bgClass } = eachInfo;

  return (
    <div
      className={`flex flex-col   lg:flex-row  lg:text-center bg-primary px-8 py-8 mt-2 lg:mx-4 w-full  text-white ${bgClass}`}
    >
      <div className="flex justify-center items-center">
        <img src={logo} alt="" />
      </div>
      <div className=" w-full text-center">
        <h1 className=" text-lg font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EachInfo;
