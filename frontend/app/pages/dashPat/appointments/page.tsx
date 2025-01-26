"use client"
import React, { useState } from "react";
import AppointmentList from "../../../../components/docdashComp/list";
import Dashhead from "../../../../components/docdashComp/dashHead"
const Apoitments = () => {
  const [search, setSearch] = useState(""); // State for search input

  const appointments = [
    { id: "4", date: "2024-12-18", patient: "John Doe", type: "Checkup", number: "001", email: "john@example.com" },
    { id: "5", date: "2024-12-19", patient: "Jane Smith", type: "Consultation", number: "002", email: "jane@example.com" },
    { id: "6", date: "2024-12-20", patient: "Alice Brown", type: "Surgery", number: "003", email: "alice@example.com" },
    { id: "7", date: "2024-12-21", patient: "Bob Johnson", type: "Follow-up", number: "004", email: "bob@example.com" },
    // Add more entries as needed
  ];

  // Filter appointments based on the search input
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patient.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="overflow-x-visible">
      <input
        type="text"
        placeholder="Search..."
        className="w-[90%] md:w-[300px] h-[40px] rounded-lg m-8 bg-gray-200 text-gray-600 placeholder-gray-500 px-4 focus:outline-none focus:ring-2 mr-[8%] focus:ring-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search input on change
      />
      <div className="overflow-x-scroll ">
      <div className=" px-8  rounded-[10px] overflow-y-visible  lg:w-full    ">
        
        <Dashhead></Dashhead>

        {/* Pass the filtered appointments to AppointmentList */}
        <AppointmentList appointments={filteredAppointments} />
      </div>
      </div>
     
    </div>
  );
};

export default Apoitments;
