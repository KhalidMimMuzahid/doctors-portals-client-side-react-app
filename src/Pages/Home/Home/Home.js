import React from "react";
import Banner from "../Baner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import HomeBasicInfo from "../HomeBasicInfo/HomeBasicInfo";
import MakePayment from "../MakePayment/MakePayment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Treatment from "../Treatment/Treatment";
const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <HomeBasicInfo />

      {/* second section start  */}
      <Services />
      {/* second section end  */}

      {/* third section start  */}
      <Treatment />

      {/* third section end  */}
      <MakePayment />

      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
