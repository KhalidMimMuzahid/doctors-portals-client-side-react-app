import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../../Component/Loading";
import AppointmentModal from "./AppointmentModal";
import EachAppointment from "./EachAppointment";

const AvailableApointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointments?date=${date}`
      );
      const data = res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointments")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="my-16">
      <h5 className="text-secondary text-lg font-bold text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </h5>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
        {appointmentOptions.map((option) => (
          <EachAppointment
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableApointment;
