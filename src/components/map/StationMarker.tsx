import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import type { ChargingStation } from '../../types/station';

interface StationMarkerProps {
  station: ChargingStation;
  onMarkerClick: (station: ChargingStation) => void;
}

const StationMarker: React.FC<StationMarkerProps> = ({ station, onMarkerClick }) => (
  <Marker
    position={[station.latitude, station.longitude]}
    eventHandlers={{
      click: () => onMarkerClick(station),
    }}
  >
    <Popup>
      <div className="p-2">
        <h3 className="font-semibold">{station.name}</h3>
        <p className="text-sm text-gray-600">{station.address}</p>
        <p className="text-sm mt-1">
          Available: {station.availablePoints}/{station.totalPoints}
        </p>
      </div>
    </Popup>
  </Marker>
);

export default StationMarker;