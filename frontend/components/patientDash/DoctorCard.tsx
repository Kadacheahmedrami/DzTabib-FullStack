import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaStar } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";

interface DoctorCardProps {
  rate: number;
  image: string;
  id: string;
  DoctorName: string;
  location: string;
  speciality: string;
  date: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ rate, image, id, DoctorName, location, speciality, date }) => {
  return (
    <div className="border border-primary hover:shadow-[0_0_40px_10px_rgba(0,100,255,0.2)] hover:scale-[1.02] cursor-pointer ease-in-out duration-200 transition-all rounded-2xl gap-4 relative h-[400px] bg-white flex flex-col justify-center items-center">
      <Link href={id} className="flex flex-col mt-[10%] justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="relative rounded-full p-1 bg-white shadow-[0_0_40px_10px_rgba(0,100,255,0.2)]">
            <Image 
              src={image} 
              alt={`${DoctorName} profile`} 
              className="rounded-full w-32 h-32" 
              width={96} 
              height={96} 
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-[#5A5389]">Mr {DoctorName}</h2>
          <p className="text-gray-400">{location}</p>
          <div className="bg-[#ECEFFF] mt-[10%] py-[4px] flex items-center my-2 justify-center rounded-[11px]">
            <h1 className="text-primary font-bold">{speciality}</h1>
          </div>
          <div className="absolute -left-1 top-8 z-20 flex items-center space-x-2">
            <div className="clip-polygon bg-[#FFF3EF] w-[80px] h-[40px] transform border-none relative"></div>
            <span className="text-[#FE7C42] absolute right-4 p-2 text-xl">{rate}</span>
            <FaStar className="absolute" color="#FE7C42" size={22} />
          </div>
        </div>
      </Link>
      
      <div className="flex mt-auto justify-between w-full border-t border-primary">
        <div className="flex items-center justify-center ml-3">
          <LuCalendarRange color="#969699" />
          <h1 className="text-[#969699] text-center">{date}</h1>
        </div>
        <Link href="/dashPat/doctorProfile" className="bg-primary   hover:border-solid clip-reserve  rounded-br-2xl text-white text-center py-1 px-4">
          Reserver
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
