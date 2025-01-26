// /components/NotificationItem.tsx
import Image from "next/image";
import React from "react";

interface NotificationItemProps {
  imgSrc: string;
  message: string;
  date: string;
  viewed: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ imgSrc, message, date, viewed }) => {
  return (
    <div className={`h-[84px] flex flex-row items-center   gap-4 p-4  ${viewed ? 'text-gray-400 bg-opacity-30  ' : 'text-[18px] font-bold  bg-opacity-80 '} rounded-[20px]  bg-white  cursor-pointer hover:bg-black hover:bg-opacity-30 hover:text-white transition-colors duration-300 ease-in-out `}
    >
     <Image
        width={100}
        height={100}
        src={imgSrc}
        alt="Notification"
        className="w-12 h-12 bg-white rounded-full"
      />
      <div className="flex flex-col flex-grow">
        <p className=" font-medium">{message}</p>
        <p className=" ">Date: {date}</p>
      </div>
      <div className={`w-4 h-4 rounded-full ${viewed ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
    </div>
  );
};

export default NotificationItem;
