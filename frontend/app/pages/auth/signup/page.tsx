'use client';
import React, { useState } from 'react';
import RoleSelection from '../../../../components/authpageComp/RoleSelection';
import InputFields from '../../../../components/authpageComp/InputFields';
import Buttons from '../../../../components/authpageComp/Buttons';
import AnimatedLoader from '../../../../components/loading';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  name: string;
  full_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'patient' | 'doctor';
  location?: string;
  diploma_code?: string;
  phone?: string;
}

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'patient',
    location: '',
    diploma_code: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleUserTypeChange = (type: string) => {
    if (type === 'patient' || type === 'doctor') {
      setFormData(prev => ({ ...prev, userType: type }));
      // Clear doctor-specific fields if switching to patient
      if (type === 'patient') {
        setFormData(prev => ({ ...prev, location: '', diploma_code: '' }));
      }
      // Clear patient-specific fields if switching to doctor
      if (type === 'doctor') {
        setFormData(prev => ({ ...prev, phone: '' }));
      }
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'full_name', 'email', 'password', 'confirmPassword'];
    const doctorFields = ['location', 'diploma_code'];
    const patientFields = ['phone'];

    // Check for empty required fields
    const emptyFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    if (formData.userType === 'doctor') {
      emptyFields.push(...doctorFields.filter(field => !formData[field as keyof FormData]));
    } else if (formData.userType === 'patient') {
      emptyFields.push(...patientFields.filter(field => !formData[field as keyof FormData]));
    }

    if (emptyFields.length > 0) {
      setError(`Please fill in the following fields: ${emptyFields.join(', ')}`);
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Validate password complexity
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError('Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, 1 number, and 1 special character');
      return false;
    }

    // Confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    setLoading(true);
    setError('');
  
    try {
      // Determine the registration endpoint based on user type
      const endpoint =
        formData.userType === 'doctor'
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/auth/doctor/register`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/auth/patient/register`;
  
      // Prepare the payload
      const payload = {
        name: formData.name,
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
        ...(formData.userType === 'doctor' && {
          location: formData.location,
          diploma_code: formData.diploma_code,
        }),
        ...(formData.userType === 'patient' && {
          phone: formData.phone,
        }),
      };
  
      // Send the registration request
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed. Please try again.');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data);
  
      // Redirect based on user type
      router.push('/pages/auth/login');
    
    } catch (error) {
      console.error('Error during registration:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'An error occurred during registration. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center py-10 px-4">
      {loading ? (
        <div className="m-auto bg-red h-[100vh] w-full flex justify-center items-center p-2">
          <AnimatedLoader />
        </div>
      ) : (
        <>
          <div className="text-[40px] font-bold text-gray-800 mb-4">Create Account</div>
          <RoleSelection userType={formData.userType} handleUserTypeChange={handleUserTypeChange} />
          <form onSubmit={handleSubmit} className="w-full max-w-full bg-white rounded-lg p-6">
            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md mb-4">{error}</div>
            )}
            <InputFields formData={formData} type={formData.userType} handleInputChange={handleInputChange} />
            <Buttons handleSubmit={handleSubmit} />
          </form>
          <div className="text-[20px] text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/pages/auth/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </div>
        </>
      )}
    </div>
  );
}