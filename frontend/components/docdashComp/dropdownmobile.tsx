"use client";
import React, { useState, useRef, useEffect } from "react";

import { FiSettings } from "react-icons/fi"; 

const DropdownMenuMobile: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  const handleViewProfile = () => {
    console.log("Viewing profile...");
    // Implement your view profile logic here
  };
  const handleRetarder = () => {
    console.log("REtarding ...");
    // Implement your view profile logic here
  };
  
  const handleCancelAppointment = () => {
    console.log("Cancelling appointment...");
    setDropdownVisible(false); // Close the dropdown
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false); // Close dropdown when clicking outside
        handleCancelAppointment(); // Call the cancel appointment logic
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-black absolute bottom-10 right-1 "
        onClick={toggleDropdown} // Handle the toggle click event
      >
    
        <FiSettings size={30}/>
      </button>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <div className="absolute right-0  bottom-[-85px] w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <button
            onClick={handleViewProfile}
            className="w-full px-4 py-2 text-left text-black hover:bg-gray-200 rounded-t-lg"
          >
            View Profile
          </button>
          <button
            onClick={handleRetarder}
            className="w-full px-4 py-2 text-left text-black hover:bg-gray-200 rounded-t-lg"
          >
            retardé
          </button>
          <button
            onClick={handleCancelAppointment}
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200 rounded-b-lg"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuMobile;
