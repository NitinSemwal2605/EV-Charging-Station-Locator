import React from 'react';
import { Star, Battery, Clock, IndianRupee } from 'lucide-react';
import type { ChargingStation } from '../types/station';

interface StationListProps {
  stations: ChargingStation[];
  onStationSelect: (station: ChargingStation) => void;
  selectedStation?: ChargingStation;
}

const StationList: React.FC<StationListProps> = ({
  stations,
  onStationSelect,
  selectedStation,
}) => {
  return (
    <div className="overflow-y-auto h-full">
      {stations.map((station) => (
        <div
          key={station.id}
          className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
            selectedStation?.id === station.id ? 'bg-blue-50' : ''
          }`}
          onClick={() => onStationSelect(station)}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{station.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">{station.rating}</span>
              <span className="text-sm text-gray-500">({station.reviewCount})</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mt-1">{station.address}</p>
          
          <div className="mt-2 flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Battery className="w-4 h-4" />
              <span>{station.availablePoints}/{station.totalPoints} available</span>
            </div>
            <div className="flex items-center space-x-1">
              <IndianRupee className="w-4 h-4" />
              <span>₹{station.pricePerKwh}/kWh</span>
            </div>
          </div>
          
          <div className="mt-2 flex items-center space-x-1 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{station.operatingHours}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {station.connectorTypes.map((type) => (
              <span
                key={type}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StationList;