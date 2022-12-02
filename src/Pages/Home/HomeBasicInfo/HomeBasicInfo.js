import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import EachInfo from "./EachInfo";
const HomeBasicInfo = () => {
  const homeBasicInfo = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Open On 24 hourse in every day",
      logo: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      logo: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Contact us now",
      description: "+000 123 456789",
      logo: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between my-5">
      {homeBasicInfo.map((eachInfo) => (
        <EachInfo key={eachInfo.id} eachInfo={eachInfo} />
      ))}
    </div>
  );
};

export default HomeBasicInfo;
