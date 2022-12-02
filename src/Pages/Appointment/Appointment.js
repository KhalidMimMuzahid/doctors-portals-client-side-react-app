import React, { useState } from "react";
import AppointBanner from "./AppointBanner/AppointBanner";
import AvailableApointment from "./AvailableApointment/AvailableApointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section>
      <AppointBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableApointment selectedDate={selectedDate} />
    </section>
  );
};

export default Appointment;
