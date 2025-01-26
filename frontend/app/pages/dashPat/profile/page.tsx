"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('Ravad Nadam');
  const [email, setEmail] = useState('0rwad.nadam0@gmail.com');
  const [password, setPassword] = useState('**********');
  const [birthday, setBirthday] = useState('2002-08-09');

  const router = useRouter();
  return (
  
    <div className='p-4'>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative  ">
            <Image
              src="/png/doc.png" // Replace with actual image URL
              alt="Profile"
              height={200}
              width={200}
              className="rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0  text-white hover:bg-opacity-40 p-[2px] rounded-full transition-all duration-300 hover:scale-110 hover:bg-black">
              <Image
                src="/svg/cam.svg"
                alt="cam"
              height={60}
              width={60}
                
              />
             
              
            </button>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-4 text-2xl font-semibold text-center border-b-2 bg-transparent  transition-all ease duration-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input  
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birthday:</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

 

       
        </div>

        <div className="flex  justify-start gap-4 mt-8">
          <button className=" w-[160px]  transition-all ease duration-300  py-4 text-blue-500  border-2 border-blue-500  border-solid  rounded-lg hover:bg-blue-500 hover:text-white">Save</button>
          <button  onClick={() => router.back()} className=" w-[160px] transition-all ease duration-300 py-4 text-red-500 border-2 border-red-500 border-solid  rounded-lg hover:bg-red-500 hover:text-white">Cancel</button>
        </div>
    
   </div>
  );
};

export default ProfilePage;
