"use client"
// /pages/dash/notification.tsx
import React, { useEffect } from "react";
import DoctorCard from "../../../../components/patientDash/DoctorCard"
import SpecialitySelector from '../../../../components/patientDash/specslider'
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaGratipay } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";

interface Doctor {
  id: string;
  DoctorName: string;
  image: string;
  location: string;
  speciality: string;
  rate: number;
  date: string;
  price: string;
}

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("ALL");
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchDoctors = async () => {
    try {
      const res = await fetch(
        "https://672ddda3fd89797156440765.mockapi.io/Tabib/api/doctors/"
      );
      if (!res.ok) {
        throw new Error("Error fetching doctors");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching doctors:", error);
      return [];
    }
  };

  useEffect(() => {
    const getDoctors = async () => {
      setIsLoading(true);
      setIsError(false);
      const doctorsFromServer = await fetchDoctors();
      if (doctorsFromServer.length > 0) {
        setIsSuccess(true);
        setDoctors(doctorsFromServer);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getDoctors();
  }, []);

  const handleSpecialityChange = (speciality: string) => {
  
    setSelectedSpeciality(speciality);
    console.log(speciality)
  };

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.DoctorName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === "" ||
        doctor.location?.toLowerCase() === selectedLocation.toLowerCase()) &&
      (selectedPrice === "" ||
        doctor.price?.toLowerCase() === selectedPrice.toLowerCase()) &&
      (selectedRating === "" || doctor.rate?.toString() === selectedRating) &&
      (selectedSpeciality === "ALL" ||
        doctor.speciality?.toLowerCase() === selectedSpeciality.toLowerCase())
    );
  });

  return (
    <div className="px-8 h-screen overflow-scroll pb-[100px]">
      <div className="flex flex-col md:flex-row items-center my-4 gap-4 justify-between">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-[18px] border border-gray-200 p-4 text-sm shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white hover:shadow-[0_6px_10px_rgba(0,0,0,0.2)] focus:shadow-[0_8px_12px_rgba(0,0,0,0.3)] transition-shadow duration-300"
            placeholder="Search by doctor name..."
          />
          <FaSearch
            size={20}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Rating Filter */}
        <div className="relative w-full md:w-1/4">
          <FaGratipay
            size={20}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red-500"
          />
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="w-full py-4 cursor-pointer px-12 rounded-[18px] border border-gray-300 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.2)] focus:shadow-[0_8px_12px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <option value="">Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="relative w-full md:w-1/4">
          <MdPriceChange
            size={20}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-orange-500"
          />
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="w-full py-4 cursor-pointer px-12 rounded-[18px] border border-gray-300 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.2)] focus:shadow-[0_8px_12px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <option value="">Price</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className="relative w-full md:w-1/4">
          <FaLocationDot
            size={20}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500"
          />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full py-4 cursor-pointer px-12 rounded-[18px] border border-gray-300 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.2)] focus:shadow-[0_8px_12px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <option value="">Location</option>
            <option value="batna">Batna</option>
            <option value="algiers">Algiers</option>
            <option value="oran">Oran</option>
          </select>
        </div>
      </div>

      <SpecialitySelector onSpecialityChange={handleSpecialityChange} />
      <h1 className="text-3xl font-bold mb-4">Doctors:</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching doctors. Please try again later.</p>}
      {isSuccess && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              rate={doctor.rate}
              image={doctor.image}
              DoctorName={doctor.DoctorName}
              location={doctor.location}
              speciality={doctor.speciality}
              date={doctor.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
