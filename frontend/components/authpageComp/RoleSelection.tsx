
import React from 'react';

type RoleSelectionProps = {
  userType: string;
  handleUserTypeChange: (type: string) => void;
};

const RoleSelection: React.FC<RoleSelectionProps> = ({ userType, handleUserTypeChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        type="button"
        onClick={() => handleUserTypeChange("doctor")}
        className={`cursor-pointer px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-all ${
          userType === "doctor"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        Doctor
      </button>
      <button
        type="button"
        onClick={() => handleUserTypeChange("patient")}
        className={`cursor-pointer px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-all ${
          userType === "patient"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        Patient
      </button>
    </div>
  );
};

export default RoleSelection;
