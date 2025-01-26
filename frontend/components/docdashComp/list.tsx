import React from "react";
import DropdownMenu from "../docdashComp/dropdown";
import DropdownMenuMobile from "../docdashComp/dropdownmobile"


interface AppointmentRowProps {
  id: string;
  date: string;
  patient: string;
  type: string;
  number: string;
  email: string;
}

const AppointmentRow: React.FC<AppointmentRowProps> = ({
  id,
  date,
  patient,
  type,
  number,
  email,
}) => {
  return (
    <><div
    key={id}
    className="w-[99.9%] hidden lg:flex flex-row justify-between items-center border-b-2 border-solid px-8 mx-auto py-4 bg-white hover:bg-slate-100 hover:text-blue-500 cursor-pointer transition-all ease-in duration-[200ms]"
  >
    <div className="w-[150px] text-start ">{date}</div>
    <div className="w-[200px] text-start ">{patient}</div>
    <div className="w-[180px] text-start ">{type}</div>
    <div className="w-[250px] text-start ">{number}</div>
    <div className="w-[250px] text-start ">{email}</div>
    <div className="w-[200px] flex flex-row justify-center items-center text-start ">
      <button className= { `${  false ? "bg-gray-400" : "bg-[#1ACF65]" } w-full rounded-[20px] text-white px-4 py-2  `}  >Start Meet</button>
      <DropdownMenu />
    </div>
  </div>
  <div className="lg:hidden  flex flex-row w-full justify-between p-4 h-auto bg-white  rounded-[20px] my-[5%] border">
    <div className="w-[100px] rounded-[10px] bg-slate-200 p-[8px] h-[85px]">
    <div className="h-full w-full bg-white rounded-[50px] "></div>

    </div>
    <div className="flex flex-col w-[40%] justify-between">
    <div className=" text-start text-[24px] font-bold  ">{patient}</div>
    <div className=" text-start ">{date}</div>
  
    </div>
    
    <div className="w-[50%] flex flex-row justify-center items-center text-start ">
      <button className= { `${  false ? "bg-gray-400" : "bg-[#1ACF65]" } w-full rounded-[20px] text-white px-4 py-2  `}  >Start Meet</button>
      <div className="hidden lg:flex">  <DropdownMenu /></div>
      <div className="flex lg:hidden">     <DropdownMenuMobile /></div>
   
    
    </div>
  
  </div>
  
  </>
    
  );
};

interface AppointmentListProps {
  appointments: {
    id: string;
    date: string;
    patient: string;
    type: string;
    number: string;
    email: string;
  }[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => {
  return (
    <>
      {appointments.map((appointment) => (
        <AppointmentRow
          key={appointment.id} // Use the unique ID as the key
          id={appointment.id}
          date={appointment.date}
          patient={appointment.patient}
          type={appointment.type}
          number={appointment.number}
          email={appointment.email}
        />
      ))}
    </>
  );
};

export default AppointmentList;
