"use client";
import { LiaCertificateSolid } from "react-icons/lia";
import { Tabs, 
  // TabsContent,
   TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TfiAlarmClock } from "react-icons/tfi";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useParams } from "next/navigation";
import LocationMap from "@/components/patientDash/map";

interface DoctorDetails {
  image: string;
  expyear: number;
  DoctorName: string;
  speciality: string;
  rate: number;
  comment: { length: number };
  date: string;
  adressImage: string;
  certificate: string;
}

export default function Page() {
  // Get the path name
  const { doc_details } = useParams();
  const [docDetails, setDocDetails] = useState<DoctorDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("location");

  const getDetails = async () => {
    try {
      const res = await fetch(`https://672ddda3fd89797156440765.mockapi.io/Tabib/api/doctors/${doc_details}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setDocDetails(null);
      setIsSuccess(false);
      setError(false);

      const data = await getDetails();
      if (data) {
        setDocDetails(data);
        setIsSuccess(true);
        setError(false);
      } else {
        setError(true);
        setIsSuccess(false);
        setDocDetails(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [doc_details]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data. Please try again later.</p>;
  }

  return (
    <div className='flex flex-col justify-between w-full xl:flex-row'>
      {isSuccess && docDetails && (
        <>
          {/* Details */}
          <div className='flex flex-col p-4'>
            <div className='flex bg-red-100 p-4 md:flex-row border flex-col gap-8 items-center'>
              <Image src={docDetails.image} alt="doctor" className="rounded-3xl" width={500} height={400} />
              <div className='flex flex-col gap-8'>
                {/* Experience */}
                <div className='flex gap-4 p-2 bg-primary rounded-3xl'>
                  <div className='bg-[#CAD6FF] p-2 rounded-full items-center justify-center flex'>
                    <LiaCertificateSolid size={40} color='#0C72E1' />
                  </div>
                  <h1 className='text-white text-xl font-semibold'>{docDetails.expyear} years <br />experience</h1>
                </div>
                {/* Focus */}
                <div className='flex gap-4 p-2 bg-primary rounded-3xl'>
                  <h1 className='text-white text-md font-semibold text-xl'>Focus: The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.</h1>
                </div>
              </div>
            </div>
            <div className='flex p-2 mt-4 flex-col bg-white rounded-3xl'>
              <h1 className='text-primary text-2xl text-center font-semibold'>Mr: {docDetails.DoctorName} Ph.D</h1>
              <h1 className='text-gray-600 text-xl text-center'>{docDetails.speciality}</h1>
            </div>
            <div className='flex p-2 gap-x-12 mt-4 justify-between w-full items-center border'>
              {/* Rating */}
              <div className="flex w-1/4 gap-4 items-center bg-white p-2 rounded-3xl">
                <FaStar size={40} color="#0C72E1" />
                <h1 className='text-gray-600 text-xl text-center'>{docDetails.rate}</h1>
              </div>
              {/* Comment */}
              <div className="flex w-1/4 gap-4 items-center bg-white p-2 rounded-3xl">
                <LuMessageCircleMore size={40} color="#0C72E1" />
                <h1 className='text-gray-600 text-xl text-center'>{docDetails.comment.length}</h1>
              </div>
              {/* Time */}
              <div className="flex gap-4 items-center bg-white w-1/2 p-2 rounded-3xl">
                <TfiAlarmClock size={40} color="#0C72E1" />
                <h1 className='text-gray-600 text-xl text-center'>{docDetails.date}</h1>
              </div>
            </div>

            <Tabs defaultValue="location" className="w-[400px] mt-4" onValueChange={setActiveTab}>
              <TabsList className="flex gap-4">
                <TabsTrigger value="location" className={`${activeTab === 'location' ? "bg-primary" : "bg-light"} flex px-4 py-2 gap-4 rounded-3xl`}>
                  <h1>View Location</h1>
                  <IoLocationSharp color="green" size={40} />
                </TabsTrigger>
                <TabsTrigger value="crt" className={`${activeTab === 'crt' ? "bg-primary" : "bg-light"} flex px-4 py-2 gap-4 rounded-3xl`}>
                  <h1>View Certificate</h1>
                  <GrCertificate color="black" size={40} />
                </TabsTrigger>
              </TabsList>
              {/* <TabsContent value="location">{docDetails.location}</TabsContent>
              <TabsContent value="crt">{docDetails.certificate}</TabsContent> */}
            </Tabs>
          </div>

          {/* Certificate or location image */}
          {/* <div className='border p-4'>
            {activeTab === "location" ? (
              <Image src={docDetails.adressImage} alt="location" className="bg-green-200 p-8" width={800} height={1200} />
            ) : (
              <Image src={docDetails.certificate} alt="certificate" className="bg-red-200 p-8" width={800} height={1200} />
            )}
          </div> */}
        <div className='w-[600px] h-[300px] m-4'>
        <LocationMap 
          latitude={40.7128} 
          longitude={-74.0060} 
          address="New York City"  
          
        />
        </div>
        


        </>
      )}

   
    </div>
  );
}