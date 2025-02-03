"use client"
import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  role: string;
  id: string;
  email: string;
}

export default function DashPat() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/cookie'); // Fetch the user from the endpoint
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          console.log(data.user); // Log the user data to the console
        } else {
          console.error('Error fetching user:', res.statusText);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          Welcome, {user ? user.name : 'Guest'}!
        </h1>
        {user ? (
          <div className="mt-4 text-lg">
            <p>Role: {user.role}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <div className="mt-4 text-lg">
            <p>You are not logged in. Please sign in to access your dashboard.</p>
          </div>
        )}
      </div>
    </div>
  );
}
