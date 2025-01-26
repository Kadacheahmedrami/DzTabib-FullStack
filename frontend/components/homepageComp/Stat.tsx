import React from 'react'
import Image from "next/image";

interface StatProps {
    num : string ;
  text: string; // 'text' will be a string
  imageSrc: string; // 'imageSrc' will be a string (URL or path to the image)
}

function Stat({num, text, imageSrc }: StatProps) {
  return (
    <>
      <div className='flex cursor-pointer mx-auto flex-col md:flex-row  py-[60px]  gap-6 md:gap-2 justify-center items-center'>
        <Image
          src={imageSrc} // Dynamically set the image source
          height={120}
          width={120}
          alt={text} // Alt text is set to the specialty
        />
        <div className='text-center md:text-start  flex justify-center items-center lg:items-start  flex-col text-[50px]  mx-auto'>
         <div className='flex flex-row text-center md:text-start  justify-center items-center'>{num}  <div className='text-[#3267FF] text-center md:text-star'>+</div></div> 
          <div className=' text-[20px] text-center md:text-start  opacity-60'>{text}</div>
        <div>
            
        </div>
        </div>
      </div>
    </>
  )
}

export default Stat;
