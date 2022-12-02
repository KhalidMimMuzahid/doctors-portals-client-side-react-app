import React from "react";

const EachService = ({ eachService }) => {
  const { id, servicePhoto, title, description } = eachService;
  return (
    <div className="flex  flex-col items-center text-center shadow-2xl my-4 py-4  lg:mx-2 ">
      <div>
        <img src={servicePhoto} alt="" className="my-2" />
      </div>
      <div className="">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default EachService;
