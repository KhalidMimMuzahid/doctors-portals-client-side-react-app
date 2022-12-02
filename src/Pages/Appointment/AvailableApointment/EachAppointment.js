import React from "react";

const EachAppointment = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center mx-auto">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold text-secondary">
          {name}
        </h2>
        <p>{slots.length ? `${slots[0]}` : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="appointment-modal"
            className="btn btn-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachAppointment;
