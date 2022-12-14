import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Component/PrimaryButton";

const MakePayment = () => {
  return (
    <div
      className="hero my-20 text-white"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="-mt-36 w-1/2 hidden lg:block  rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-lg text-primary font-bold">Appointment</h1>
          <h1 className="text-4xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Make Payment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
