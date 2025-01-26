import React from 'react'
import Image from "next/image";
import Link from 'next/link';


function Card() {
  return (

  <div className=' lg:w-[30%] mx-auto w-[90%] border rounded-[20px] p-3 flex justify-center items-center flex-col  bg-white'>
  <Image   
      src="/svg/medz.svg" 
      alt="medz" 
      width={150} 
      height={150} 
      priority
    />
    <div className='text-[30px] text-center  font-bold '>Best tratement possible</div>
    <div className='text-[20px] opacity-60 text-center font-bold '>Root canal treatment endodontics is a dental procedure used to treat infection at the centre of a tooth.</div>
    <Link href={"/"} className='text-[20px] underline'>learn more</Link>
  </div>

  )
}

export default Card