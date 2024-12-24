export interface ChargingStation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  connectorTypes: string[];
  availablePoints: number;
  totalPoints: number;
  rating: number;
  reviewCount: number;
  pricePerKwh: number;
  operatingHours: string;
  amenities: string[];
  lastUpdated: string;
}