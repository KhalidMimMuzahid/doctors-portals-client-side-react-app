import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import EachService from "./EachService";
const Services = () => {
  const services = [
    {
      id: 1,
      servicePhoto: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      servicePhoto: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      servicePhoto: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="flex flex-col items-center my-20">
      <div className="text-center my-4">
        <h1 className="font-bold text-2xl">Our Service</h1>
        <h1 className="font-bold text-xl">Service We Provided</h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between w-full">
        {/* each features start  */}

        {services.map((eachService) => (
          <EachService key={eachService.id} eachService={eachService} />
        ))}

        {/* each features end  */}
      </div>
    </div>
  );
};

export default Services;
