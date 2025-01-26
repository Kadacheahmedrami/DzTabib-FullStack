import React from 'react';

interface ButtonsProps {
  handleSubmit: (e: React.FormEvent) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ handleSubmit }) => {
  return (
    <div className="flex mt-4 gap-4 flex-col md:flex-row">
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full md:w-1/2 bg-[#007AFF] text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
      >
        <span className="first-word">Create</span> Account
      </button>
      <button
        type="button"
        className="w-full md:w-1/2 bg-[#2D3748] text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-700 transition-all"
      >
        <span className="first-word">Sign</span> In with Google
      </button>
    </div>
  );
};

export default Buttons;