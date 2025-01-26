import React from 'react'
import Stat from './Stat'


function Status() {
  return (
  <>
  <div className="flex flex-wrap my-[40px]  bg-[#F6F6F6] mx-auto  md:w-[88%] w-full py-8 md:rounded-[15px] justify-center gap-4">
 
  <Stat num="3500" text="hapy client" imageSrc="/svg/stat1.svg" />,
  <Stat num="3500" text="hapy client" imageSrc="/svg/stat1.svg" />,
  <Stat num="3500" text="hapy client" imageSrc="/svg/stat1.svg" />,
  <Stat num="3500" text="hapy client" imageSrc="/svg/stat1.svg" />,

</div>
    </>
  )
}

export default Status