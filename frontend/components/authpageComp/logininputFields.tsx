import React, { useState } from "react";

interface LoginInputFieldsProps {
  formData: {
    email: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInputFields: React.FC<LoginInputFieldsProps> = ({ formData, handleInputChange }) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (field: string, value: string) => {
    let error = "";

    if (field === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
      }
    }

    if (field === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters long";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(value)) {
        error = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleInputChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleInputChange(e);
    validate(name, value);
  };

  return (
    <div className="space-y-4">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-[20px] text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChangeWithValidation}
          placeholder="Enter your email"
          className={`w-full px-4 py-2 h-[50px] text-[20px] border rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-[20px] text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChangeWithValidation}
          placeholder="Enter your password"
          className={`w-full px-4 py-2 h-[50px] text-[20px] border rounded-md focus:outline-none focus:ring-2 ${
            errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
          required
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
    </div>
  );
};

export default LoginInputFields;