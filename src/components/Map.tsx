import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import type { ChargingStation } from '../types/station';
import { setupMarkerIcon } from './map/MarkerIcon';
import StationMarker from './map/StationMarker';
import 'leaflet/dist/leaflet.css';

// Separate component for handling location updates
const LocationUpdater = () => {
  const map = useMap();
  
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          map.setView(
            [position.coords.latitude, position.coords.longitude],
            12
          );
        },
        () => {
          console.log('Using default location (India)');
        }
      );
    }
  }, [map]);

  return null;
};

interface MapProps {
  stations: ChargingStation[];
  onMarkerClick: (station: ChargingStation) => void;
}

const Map: React.FC<MapProps> = ({ stations, onMarkerClick }) => {
  React.useEffect(() => {
    setupMarkerIcon();
  }, []);

  // Center of India
  const defaultCenter: [number, number] = [20.5937, 78.9629];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer
        center={defaultCenter}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationUpdater />
        {stations.map((station) => (
          <StationMarker
            key={station.id}
            station={station}
            onMarkerClick={onMarkerClick}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;