
import React, { useState, useEffect } from "react";

interface SpecialitySelectorProps {
  onSpecialityChange: (selectedSpeciality: string) => void;
}

const SpecialitySelector: React.FC<SpecialitySelectorProps> = ({ onSpecialityChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [translateX, setTranslateX] = useState<string>("translateX(0%)");

  const specialities = [
    "ALL",
    ...Array.from({ length: 19 }, (_, i) => `speciality ${i + 1}`), // Generates "speciality 1" to "speciality 19"
  ]


  const [spec ,setspecialities ] = useState(specialities)

  const [dropdownSpecialities, setDropdownSpecialities] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth !== 0) {
      const numItemsInSpecialities = windowWidth > 1300 
        ? Math.floor(windowWidth / 212)
        : Math.floor(windowWidth / 242);
      
      const visibleSpecialities = specialities.slice(0, numItemsInSpecialities);
      const dropdownItems = specialities.slice(numItemsInSpecialities);
      
      setspecialities(visibleSpecialities);
      setDropdownSpecialities(dropdownItems);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setTranslateX(`translateX(${selectedIndex * 129.5}%)`);
    } else if (windowWidth >= 768) {
      setTranslateX(`translateX(${selectedIndex * 166.5}%)`);
    } else {
      setTranslateX(`translateX(${selectedIndex * 146.5}%)`);
    }
  }, [windowWidth, selectedIndex]);

  const handleSpecialitySelect = (index: number) => {
    // Adjust the index for dropdown specialities
    const speciality = index < specialities.length ? specialities[index] : dropdownSpecialities[index - specialities.length];
    setSelectedIndex(index);
    onSpecialityChange(speciality); // Notify parent component of the change
  };

  return (
    <div className="relative w-full bg-white p-3 py-2 my-5  rounded-full  flex flex-col items-center shadow-lg">
      <div className="flex w-full items-center text-lg font-medium">
        <div className="overflow-hidden  flex   flex-row w-full gap-14 md:gap-20 lg:gap-9">
          {spec.map((speciality, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full h-[45px] relative z-[3] flex justify-center items-center w-[120px] px-2 transition-colors duration-200 ${
                selectedIndex === index ? "text-white" : "text-gray-600"
              }`}
              style={{
                flexShrink: 0,
              }}
              onClick={() => handleSpecialitySelect(index)}
            >
              {speciality}
            </span>
          ))}
        </div>

        <div className="relative">
          <button
            className="cursor-pointer rounded-full h-[45px] flex justify-center items-center w-[65px] bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ▼
          </button>
          {showDropdown && dropdownSpecialities.length > 0 && (
            <div className="absolute top-[50px] right-0 bg-white shadow-xl rounded-lg w-[200px] p-3 z-[4] mt-2 transform transition-all ease-in-out duration-300">
              <div className="max-h-[200px] overflow-y-auto">
                {dropdownSpecialities.map((speciality, index) => (
                  <span
                    key={specialities.length + index}
                    className="block cursor-pointer px-4 py-2 hover:bg-blue-100 hover:text-blue-500 text-gray-600 rounded-lg transition-colors duration-200"
                    onClick={() => {
                      handleSpecialitySelect(specialities.length + index);
                      setShowDropdown(false);
                    }}
                  >
                    {speciality}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute z-[2] left-4 h-[45px] rounded-full w-[120px] transition-transform duration-300"
        style={{
          transform: translateX,
          background: "linear-gradient(to left, #18A0FB, #0C72E1)",
        }}
      ></div>
    </div>
  );
};

export default SpecialitySelector;
