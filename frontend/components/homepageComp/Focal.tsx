import React from 'react'

import Image from "next/image";
import Link from 'next/link';


function Focal() {
  return (
    <div className='w-full flex flex-col lg:flex-row p-[6%] justify-center items-center'>

        <div className='text flex flex-col  justify-center items-center  lg:justify-start lg:items-start w-[90%] lg:w-[70%] gap-8' >

        <div className='text-[40px] text-center lg:text-start lg:text-[60px] font-bold  w-full lg:w-[60%]'>Book Your  Appointment Now on Tabib-dz</div>
        <div className='text-[20px]   text-center lg:text-start  lg:text-[30px] opacity-60 lg:w-[60%] '>We work only the best doctors  in different specialities in order to provide the best medical care to our patients, So dont worry about anything and book yourself.</div>
        <Link href="/pages/dashPat/search" >
    <button className="lg:mx-auto  text-[20px] relative h-[64px] w-[280px] overflow-hidden border border-[#1376F8] text-[#1376F8] shadow-2xl transition-all   rounded-[10px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1376F8] before:duration-300 before:ease-out hover:text-white hover:shadow-[0_4px_20px_#1376F8] hover:before:h-40 hover:before:w-[290px] hover:before:opacity-100">
      <span className="relative z-10">Book an appointment</span>
    </button>
  </Link>

        </div>

        <Image src={"/webp/betterwomen.webp"} height={550} width={550} alt='women'/>
   
    </div>
  )
}

export default Focal