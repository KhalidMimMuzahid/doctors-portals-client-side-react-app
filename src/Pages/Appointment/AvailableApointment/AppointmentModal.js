import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const AppointmentModal = ({
  treatment,
  selectedDate,
  setTreatment,
  refetch,
}) => {
  const { currentUser } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  const handleModalSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const patientEmail = form.email.value;
    const patientPhone = form.phone.value;
    const booking = {
      patientName,
      treatmentName: name,
      slot,
      patientEmail,
      patientPhone,
      selectedDate: date,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("this treatment booked succesfully");
          refetch();
        }
      });

    // TODO : send this data to the server and after saving this data show the success toast to the user
    // for closing this modal
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleModalSubmit} className="mt-12">
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full  my-1"
            />
            <select
              name="slot"
              className="select select-bordered my-1 w-full "
              required
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={currentUser?.displayName}
              type="text"
              placeholder="your name"
              className="input input-bordered w-full  my-1"
              required
            />
            <input
              name="email"
              defaultValue={currentUser?.email}
              type="email"
              placeholder="mail address"
              className="input input-bordered w-full  my-1"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="phone number"
              className="input input-bordered w-full  my-1"
              required
            />
            <input
              type="submit"
              value="submit"
              className="w-full  my-1 btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
