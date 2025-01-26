import React from 'react';

const Buttons: React.FC = () => {
  return (
    <div className="flex mt-4">
      <button
        type="submit"
        className="w-full bg-[#007AFF] text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
      >
        Login
      </button>
    </div>
  );
};

export default Buttons;
