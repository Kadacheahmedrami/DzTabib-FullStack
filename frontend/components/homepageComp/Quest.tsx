import React from 'react';

interface QuestProps {
  quest: string;
}

const Quest: React.FC<QuestProps> = ({ quest }) => {
  return (
    <div
      className=" relative w-[90%] my-10 md:w-[800px] p-5 mx-auto rounded-lg cursor-pointer flex flex-col justify-start items-start gap-3 
        bg-white shadow-md overflow-visibile transition-all duration-300 ease-in-out 
        hover:scale-105 hover:shadow-[0_4px_20px_#1376F8] hover:text-white
        before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 
        before:rounded-lg before:bg-[#1376F8] before:transition-all before:duration-300 before:ease-out 
        hover:before:h-full hover:before:w-full"
    >
      <div className="relative text-[22px] font-semibold">{quest}</div>
      <div className="relative w-[98%] h-[2px] bg-black opacity-40 rounded-full"></div>
    </div>
  );
};

export default Quest;
