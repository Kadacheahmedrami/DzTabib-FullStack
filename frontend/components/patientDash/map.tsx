import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// TypeScript-friendly icon configuration
const customIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface LocationMapProps {
  latitude: number;
  longitude: number;
  language?: string;
  address?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  latitude, 
  longitude, 
  
  address = 'Location' 
}) => {
  return (
    <MapContainer 
      center={[latitude, longitude]} 
      zoom={13} 
      scrollWheelZoom={false}
      className="h-[400px] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
        position={[latitude, longitude]} 
        icon={customIcon}
      >
        <Popup>
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;