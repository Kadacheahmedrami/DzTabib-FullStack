import React, { useState } from "react";

interface LocationSelectProps {
  locations: string[]; // Array of predefined locations
  onLocationChange: (selectedLocation: string) => void; // Callback for handling location change
}

const LocationSelect: React.FC<LocationSelectProps> = ({ locations, onLocationChange }) => {
  const [location, setLocation] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    onLocationChange(selectedLocation); // Notify parent component
  };

  return (
    <div className="w-[30%] p-4 bg-slate-200 flex-col justify-center items-center">
      {/* Location Select */}
      <div className="w-[90%] mx-auto">
        <label htmlFor="location" className="text-black font-semibold">
          Location
        </label>
        <select
          id="location"
          value={location}
          onChange={handleChange}
          className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none"
        >
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelect;
