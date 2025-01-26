import React from 'react';
import Image from "next/image";

function Footer() {
  return (
    <div className="relative ">
      {/* Image */}
 
    
     
      {/* SVG */}

      <Image
        src={"/webp/heal.webp"}
        height={500}
        width={500}
        alt="heal"
        className="rounded-full right-[5%]  top-[-10px]   absolute hidden lg:block z-10"
      />
   <div className='h-[650px] w-[650px] rounded-full absolute hidden lg:block right-[1%] top-[-80px]  bg-[#F2F9FF]  z-1'>
        
        </div>
        <div className='h-[600px] w-[600px] rounded-full absolute hidden lg:block  right-[2.5%]  top-[-30px]  bg-[#E6F3FF]  z-1'>
        
        </div>
      <svg
  viewBox="0 0 1442 638"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute z-0 w-full h-auto mt-[150px] "
>
  <path
    d="M1 637H1441V61.0175C1201 21.0058 961 1 721 1C481 1 241 21.0058 1 61.0175V637Z"
    fill="#0081FE"
    stroke="#0081FE"
  />

  <foreignObject x="0" y="0" width="1442" height="638">
    <div>
    



      <div className="text-[70px] ml-[5%] mt-[7%] text-white">Ready to get started</div>

      <div className="flex flex-col md:flex-row gap-7 mt-[0%] md:mt-[21%] relative z-1 justify-center items-center">
      <div className="px-4 w-[30%] md:w-[280px] scale-100 md:scale-[0.7]  mx-[-40px] md:ml-[5%] bg-white relative gap-4 z-1 h-[100px] rounded-full justify-center items-center flex flex-row group hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]  cursor-pointer transition-all ease duration-300">
  <Image
    src="/svg/apple.svg"
    height={60}
    width={60}
    alt="apple"
  />
  <div className="flex flex-col">
    <div className="text-[20px]">Download on the</div>
    <div className="text-[25px] font-bold">APP store</div>
  </div>
</div>

<div className="px-4 w-[30%] md:w-[280px] scale-100 md:scale-[0.7] mx-[-40px] md:mr-auto bg-black relative gap-4 z-1 h-[100px] rounded-full justify-center items-center flex flex-row group  hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.7)] cursor-pointer transition-all ease duration-300">
  <Image  
    src="/svg/play.svg"
    height={60}
    width={60}
    alt="play"
  />
  <div className="flex flex-col">
    <div className="text-[20px] text-white">Download on the</div>
    <div className="text-[25px] text-white font-bold">PLAY store</div>
  </div>
</div>


        <div className="text-[21px] w-max text-white mx-auto md:mr-[5%]">
          © 2019 APCOM. All Rights Reserved
        </div>
        <div className="flex gap-4 mx-auto md:mr-[5%]">
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform hover:scale-110 hover:filter hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)]"
  >
    <Image
      src="/svg/Facebook.svg"
      height={60}
      width={60}
      alt="Facebook"
    />
  </a>
  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform hover:scale-110 hover:filter hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)]"
  >
    <Image
      src="/svg/Linkedin.svg"
      height={60}
      width={60}
      alt="Linkedin"
    />
  </a>
  <a
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:scale-110 ease transition-all 0.3s ease  hover:filter hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
  >
    <Image
      src="/svg/Twitter.svg"
      height={60}
      width={60}
      alt="Twitter"
      className="mr-[5%]"
    />
  </a>
</div>

      
      </div>
    </div>
  </foreignObject>
</svg>  
    </div>
  );
}

export default Footer;
