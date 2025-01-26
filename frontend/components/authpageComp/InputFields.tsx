import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for show/hide password

type InputFieldsProps = {
  formData: {
    name: string;
    full_name: string;
    email: string;
    password: string;
    confirmPassword: string;
    location?: string; // Doctor-specific field
    diploma_code?: string; // Doctor-specific field
    phone?: string; // Patient-specific field
  };
  type: string; // 'doctor' or 'patient'
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFields: React.FC<InputFieldsProps> = ({ formData, type, handleInputChange }) => {
  const [errors, setErrors] = useState({
    name: '',
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    diploma_code: '',
    phone: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errorMessage = 'Name is required';
        }
        break;

      case 'full_name':
        if (!value.trim()) {
          errorMessage = 'Full name is required';
        }
        break;

      case 'email':
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(value)) {
          errorMessage = 'Please enter a valid email address';
        }
        break;

      case 'password':
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(value)) {
          errorMessage = 'Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, 1 number, and 1 special character';
        }
        break;

      case 'confirmPassword':
        if (value !== formData.password) {
          errorMessage = 'Passwords do not match';
        }
        break;

      case 'location':
        if (type === 'doctor' && !value.trim()) {
          errorMessage = 'Location is required';
        }
        break;

      case 'diploma_code':
        if (type === 'doctor' && !value.trim()) {
          errorMessage = 'Diploma code is required';
        }
        break;

      case 'phone':
        if (type === 'patient' && !value.trim()) {
          errorMessage = 'Phone number is required';
        }
        break;

      default:
        break;
    }

    return errorMessage;
  };

  const handleInputChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleInputChange(e);

    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  return (
    <div className="flex flex-col space-y-4 justify-between">
      {/* Name and Full Name */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChangeWithValidation}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Full Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleInputChangeWithValidation}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="w-full">
        <label className="text-gray-700 font-medium text-[24px]">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChangeWithValidation}
          className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Doctor-Specific Fields */}
      {type === 'doctor' && (
        <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
          <div className="w-full">
            <label className="text-gray-700 font-medium text-[24px]">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location || ''}
              onChange={handleInputChangeWithValidation}
              className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          <div className="w-full">
            <label className="text-gray-700 font-medium text-[24px]">Diploma Code</label>
            <input
              type="text"
              name="diploma_code"
              placeholder="Diploma Code"
              value={formData.diploma_code || ''}
              onChange={handleInputChangeWithValidation}
              className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
            {errors.diploma_code && <p className="text-red-500 text-sm">{errors.diploma_code}</p>}
          </div>
        </div>
      )}

      {/* Patient-Specific Field */}
      {type === 'patient' && (
        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone || ''}
            onChange={handleInputChangeWithValidation}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      )}

      {/* Password and Confirm Password */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full relative">
          <label className="text-gray-700 font-medium text-[24px]">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChangeWithValidation}
              className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="w-full relative">
          <label className="text-gray-700 font-medium text-[24px]">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChangeWithValidation}
              className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </span>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
      </div>
    </div>
  );
};

export default InputFields;