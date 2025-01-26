import React from 'react';
import './style.css'


import Image from "next/image";
import Link from 'next/link';
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
  
        <div className="w-full  text-[25px] md:text-[30px] flex h-full flex-row ">
        <div className="left flex flex-col items-center justify-center h-auto  mx-auto px-4 md:px-8">
  <div className="text-white  text-[25px]    lg:text-[35px] font-bold text-center  mb-4">
    Social media shared today,
  </div>
  <div className="text-white  text-[25px]  lg:text-[35px] font-bold text-center  mb-6">
    tomorrow or by location
  </div>
  <Image
    src="/webp/betterwomen.webp"
    height={500}
    width={500}
    alt="betterwomen"
    className="w-[40%] md:w-[60%] lg:w-[70%] h-auto mx-auto overflow-hidden"
  />
</div>

          <div className='w-full pad   flex-col sac   flex justify-start items-start'>

            <Link   href='/' className="gap-2 mr-auto flex justify-center items-center text-[30px] font-bold"> 
                <Image 
              
                  src="/svg/logo.svg" 
                  alt="logo" 
                  width={60} 
                  height={60} 
                  priority 
                />
                      <Image 
              
              src="/png/tabib.png" 
              alt="logo" 
              width={160} 
              height={160} 
              priority 
            />

            </Link >


             {children}

      


            </div>

     
        </div>
      
     
  );
}
