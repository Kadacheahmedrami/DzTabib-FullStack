import React from 'react'

import Image from "next/image";


function Focal1() {
  return (
    <div className='w-full flex flex-col lg:flex-row p-[6%] justify-center items-center'>

        <div className='text flex flex-col  justify-center items-center  lg:justify-start lg:items-start w-[90%] lg:w-[70%] gap-8' >

        <div className='text-[40px] text-center lg:text-start lg:text-[60px] font-bold  w-full lg:w-[60%]'>Book Your  Appointment Now on Tabib-dz</div>
        <div className='text-[20px]   text-center lg:text-start  lg:text-[30px] opacity-60 lg:w-[60%] '>We work only the best doctors  in different specialities in order to provide the best medical care to our patients, So dont worry about anything and book yourself.</div>


          <div className='flex flex-row gap-2 justify-center items-center'>
          <Image
      
              src="/svg/phone.svg"
              height={100}
              width={100}
              alt="phone"
            />
            <div className='flex flex-col'>
              <div className='text-[20px] font-bold  text-[#1376F8]'>Dental 24H Emergency</div>
              <div className='text-[20px] '>0900-78601</div>
            </div>
          </div>

        </div>
      <div className='mt-[20px] flex justify-center items-center bg-[#66A6FA] rounded-[15px]'>
      <Image
  className="relative  top-[20px] right-[20px] lg:top-[40px] lg:right-[40px]"
  src="/webp/ginger.webp"
  height={550}
  width={550}
  alt="ginger"
/>

      </div>
     

    </div>
  )
}

export default Focal1