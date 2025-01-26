// /pages/dash/notification.tsx
import React from "react";
import NotificationItem from "../../../../components/docdashComp/notify";
const Notification = () => {
  const notifications = [
    { message: "This is a new notification.", date: "2024-12-23", viewed: false },
    { message: "Another notification item.", date: "2024-12-22", viewed: true },
    { message: "Don't miss this update.", date: "2024-12-21", viewed: false },
    { message: "Check this out!", date: "2024-12-20", viewed: true },
    { message: "Important notification.", date: "2024-12-19", viewed: false },
    { message: "This is a new notification.", date: "2024-12-23", viewed: false },
    { message: "Another notification item.", date: "2024-12-22", viewed: true },
    { message: "Don't miss this update.", date: "2024-12-21", viewed: false },
    { message: "This is a new notification.", date: "2024-12-23", viewed: false },
    { message: "Another notification item.", date: "2024-12-22", viewed: true },
    { message: "Don't miss this update.", date: "2024-12-21", viewed: false },  
        { message: "This is a new notification.", date: "2024-12-23", viewed: false },
    { message: "Another notification item.", date: "2024-12-22", viewed: true },
    { message: "Don't miss this update.", date: "2024-12-21", viewed: false },
    { message: "Check this out!", date: "2024-12-20", viewed: true },
    { message: "Important notification.", date: "2024-12-19", viewed: false },
    { message: "This is a new notification.", date: "2024-12-23", viewed: false },
    { message: "Another notification item.", date: "2024-12-22", viewed: true },
    { message: "Don't miss this update.", date: "2024-12-21", viewed: false },
    { message: "This is a new notification.", date: "2024-12-23", viewed: false },
    { message: "Another notification item.", date: "2024-12-22", viewed: true },
    { message: "Don't miss this update.", date: "2024-12-21", viewed: false },  
  ];

  return (
    <div className="w-full h-screen pb-16 overflow-scroll">
   <div className="relative  md:w-[90%] mt-[5%] mx-auto md:p-4 flex flex-col">
      <div className="absolute inset-0 md:bg-[#18A0FB] md:bg-opacity-20 blur-[20px] h-[100%] rounded-lg"></div>
      <div className="relative p-8 h-auto  z-10 flex flex-col gap-8">
        <div className="flex flex-col  gap-8">
          <h2 className="text-2xl  font-bold">Nouveau</h2>
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              imgSrc={`/svg/not${(index % 5) + 1}.svg`} // Dynamically vary image paths
              message={notification.message}
              date={notification.date}
              viewed={notification.viewed}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default Notification;