import React from 'react'
import Image from "next/image";

interface SpProps {
  text: string; // 'text' will be a string
  imageSrc: string; // 'imageSrc' will be a string (URL or path to the image)
}

function Sp({ text, imageSrc }: SpProps) {
  return (
    <>
      <div className='flex cursor-pointer flex-col gap-2 justify-center items-center'>
        <Image
          src={imageSrc} // Dynamically set the image source
          height={350}
          width={350}
          alt={text} // Alt text is set to the specialty
        />
        <div className='text-center text-[20px] lg:text-[30px] opacity-60 mx-auto w-[90%] lg:w-[40%]'>
          {text} {/* Display the specialty text */}
        </div>
      </div>
    </>
  )
}

export default Sp;
