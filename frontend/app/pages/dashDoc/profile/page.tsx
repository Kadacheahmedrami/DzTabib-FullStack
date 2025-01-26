/* eslint-disable */
"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Map } from "leaflet";
import { useMapEvents } from "react-leaflet";

// Type definitions
interface Comment {
  id: number;
  profilePic: string;
  username: string;
  rating: number;
  comment: string;
}

interface Location {
  name: string;
  lat: number;
  lng: number;
}

// Constants
const SPECIALTIES = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Neurologist",
  "Psychiatrist",
  "Gynecologist",
  "General Practitioner",
  "Dentist",
  "Ophthalmologist",
];

const LOCATIONS: Location[] = [
  { name: "Bejaia", lat: 36.7533, lng: 5.0667 },
  { name: "Alger", lat: 36.7538, lng: 3.0588 },
  { name: "Oran", lat: 35.6992, lng: -0.6333 },
  { name: "Constantine", lat: 36.365, lng: 6.6149 },
  { name: "Annaba", lat: 36.8663, lng: 7.7639 },
  { name: "Tlemcen", lat: 34.8885, lng: -1.3165 },
  { name: "Blida", lat: 36.48, lng: 2.8293 },
  { name: "Batna", lat: 35.5612, lng: 6.1782 },
  { name: "Sétif", lat: 36.1833, lng: 5.4167 },
  { name: "Chlef", lat: 36.1667, lng: 1.3333 },
];

const COMMENTS: Comment[] = [
  {
    id: 1,
    profilePic: "/png/doc.png",
    username: "John Doe",
    rating: 4,
    comment: "Excellent medical service!",
  },
  {
    id: 2,
    profilePic: "/png/doc.png",
    username: "Jane Smith",
    rating: 5,
    comment: "Highly professional care.",
  },
];

// Dynamically imported Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Custom marker icon configuration
const createCustomIcon = async () => {
  const L = await import("leaflet");
  return L.icon({
    iconUrl: "/leaflet-images/marker-icon.png",
    iconRetinaUrl: "/leaflet-images/marker-icon-2x.png",
    shadowUrl: "/leaflet-images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

// StarRating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);
// FileUpload component
const FileUpload = ({
  onFileChange,
  imagePreview,
}: {
  onFileChange: (file: File) => void;
  imagePreview: string | null;
}) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileChange(file); // Explicitly call the function
    }
  };

  return (
    <div
      className="w-full h-[450px] mt-6 border-2 border-dashed border-gray-400 rounded-lg overflow-scroll relative"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {!imagePreview ? (
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <input
            id="certificate"
            type="file"
            onChange={(e) => e.target.files?.[0] && onFileChange(e.target.files[0])}
            accept="image/*,.pdf"
            className="hidden"
          />
          <label htmlFor="certificate" className="cursor-pointer text-center">
            <p className="text-gray-500 text-lg">Drag & Drop or Browse</p>
            <p className="text-gray-400 text-sm">(JPEG, PNG, PDF)</p>
          </label>
        </div>
      ) : (
        <Image
          src={imagePreview}
          alt="Certificate preview"
          fill
          className="object-contain"
          priority
        />
      )}
    </div>
  );
};
// Main Profile component
const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState(SPECIALTIES[0]);
  const [description, setDescription] = useState("");
  const [certificate, setCertificate] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [location, setLocation] = useState(LOCATIONS[0].name);
  const [coords, setCoords] = useState(LOCATIONS[0]);
  const [markerIcon, setMarkerIcon] = useState<L.Icon | null>(null);
  const mapRef = useRef<Map | null>(null);

  // Map click handler
  const MapClickHandler = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setCoords({ lat, lng, name: "Custom Location" });
        map.setView([lat, lng], map.getZoom());
      },
    });
    return null;
  };

  // Handle location dropdown change
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = LOCATIONS.find((loc) => loc.name === e.target.value);
    if (selected) {
      setLocation(selected.name);
      setCoords(selected);
      if (mapRef.current) {
        mapRef.current.setView([selected.lat, selected.lng], mapRef.current.getZoom());
      }
    }
  };

  // Load custom marker icon
  useEffect(() => {
    (async () => {
      const L = await import("leaflet");
      const icon = await createCustomIcon();
      setMarkerIcon(icon);

      // Reset default Leaflet markers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "/leaflet-images/marker-icon.png",
        iconRetinaUrl: "/leaflet-images/marker-icon-2x.png",
        shadowUrl: "/leaflet-images/marker-shadow.png",
      });
    })();
  }, []);

  // Handle file upload
  const handleFileChange = (file: File) => {
    if (!file.type.match(/image\/(jpeg|png)|application\/pdf/)) return;

    setCertificate(file);
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!name || !specialty || !description || !coords || !certificate) {
      alert("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("specialty", specialty);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("lat", coords.lat.toString());
    formData.append("lng", coords.lng.toString());
    formData.append("certificate", certificate);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT!, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error updating profile");
    }
  };

  return (
    <div className="h-screen overflow-scroll">
      <div className="w-full flex flex-col  ">
        {/* Header Section */}
        <div className="flex flex-col items-center py-8">
          <div className="flex gap-8 mb-8">
            {[
              ["star", "Patients"],
              ["crown", "Experience"],
              ["heart", "Rating"],
            ].map(([icon, label]) => (
              <div key={icon as string} className="flex flex-col items-center text-blue-500">
                <Image
                  src={`/svg/${icon}.svg`}
                  width={80}
                  height={80}
                  alt={`${label} icon`}
                  className="hover:scale-110 transition-transform"
                />
                <div className="text-2xl font-bold mt-2">150+</div>
                <div className="text-lg">{label}</div>
              </div>
            ))}
          </div>

          <Image
            src="/png/doc.png"
            width={200}
            height={200}
            alt="Profile"
            className="rounded-full border-4 border-white shadow-lg"
            priority
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-center p-4">
          <Link
            href="/profilesettings"
            className=" text-[#18A0FB] font-semibold py-2 px-8 rounded-full border border-blue-500 hover:bg-blue-50 transition-colors text-center"
          >
            Profile Settings
          </Link>

          <button
            onClick={handleSubmit}
            className=" text-[#18A0FB] font-semibold py-2 px-8 rounded-full border border-blue-500 hover:bg-blue-50 transition-colors text-center"
          >
            Save Changes
          </button>
        </div>

        {/* Main Content Section */}
        <div className="flex-1  rounded-t-3xl p-8 flex flex-col lg:flex-row gap-8">
          {/* Location Selector and Map */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Location</label>
              <select
                value={location}
                onChange={handleLocationChange}
                className="w-full p-3  bg-white border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.name} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {coords && markerIcon && (
              <div className="h-96  rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                  center={[coords.lat, coords.lng]}
                  zoom={12}
                  className="h-full w-full"
                  ref={(map) => {
                    if (map) {
                      mapRef.current = map;
                    }
                  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[coords.lat, coords.lng]} icon={markerIcon}>
                    <Popup className="text-sm font-semibold">
                      {coords.name || location}
                    </Popup>
                  </Marker>
                  <MapClickHandler />
                </MapContainer>
              </div>
            )}
          </div>

          {/* Profile Form Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3  border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block  font-semibold text-gray-700">Specialty</label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full p-3  bg-white border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {SPECIALTIES.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="About the doctor"
                className="w-full h-60 p-3  border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="lg:w-1/4">
            <FileUpload onFileChange={handleFileChange} imagePreview={imagePreview} />
          </div>
        </div>

        {/* Comments Section */}
        <div className=" mb-[80px] p-8 space-y-6">
          {COMMENTS.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-4 p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={comment.profilePic}
                width={60}
                height={60}
                alt={comment.username}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{comment.username}</h3>
                <StarRating rating={comment.rating} />
                <p className="text-gray-600 mt-1 text-sm">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;