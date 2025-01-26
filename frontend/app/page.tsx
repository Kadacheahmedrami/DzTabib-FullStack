import React from 'react';
import Focal from "../components/homepageComp/Focal";
import Focal1 from "../components/homepageComp/Focal1";
import Band from "../components/homepageComp/Band";
import Title from "../components/homepageComp/Title";
import Special from "../components/homepageComp/Special";
import Status from "../components/homepageComp/Status";
import Blue from "../components/homepageComp/Blue";
import Quest from "../components/homepageComp/Quest";
import Header from '../components/Header';

import Footer from "../components/Footer";


export default function Home() {
  return (
    <>


    <Header />
      <Focal />
      <Band />
      <Focal1 />
      <Title 
        mainTitle="Specialities" 
        subTitle="Whatever speciality you need a doctor for, we carry lists of doctors to help out with that" 
      />
      <Special />
      <Status />

      <Title 
        mainTitle="Frequently Ask Question" 
        subTitle="We use only the best quality materials on the market in order to provide the best products to our patients." 
      />

    <Blue/>

  
    <Quest quest='Do you offer non-profit discounts?'/>
    <Quest quest='  Can I see who reads my email campaigns?'/>
    <Quest quest='Can I see who reads my email campaigns?'/>
    <Footer/>




    


    </>



  );
}
