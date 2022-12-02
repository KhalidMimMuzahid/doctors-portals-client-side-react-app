import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Component/PrimaryButton";
const ContactUs = () => {
  return (
    <section
      className="mt-20"
      style={{ background: `url(${appointment})`, backgroundSize: "cover" }}
    >
      <div className="lg:w-1/2 mx-auto  flex flex-col items-center py-12">
        <h4 className="text-primary text-lg font-bold ">COntact Us</h4>
        <h1 className="text-2xl text-white font-bold">
          Stay connected with us
        </h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs my-2"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs my-2"
        />
        <textarea
          className="textarea mt-8 w-full max-w-xs textarea-primary"
          placeholder="Bio"
        ></textarea>
        <PrimaryButton className="mt-8">Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default ContactUs;
