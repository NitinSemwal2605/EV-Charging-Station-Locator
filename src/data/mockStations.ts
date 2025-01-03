import { ChargingStation } from '../types/station';

export const mockStations: ChargingStation[] = [
  {
    id: '1',
    name: 'Tata Power Charging Station',
    latitude: 28.6139,
    longitude: 77.2090,
    address: 'Connaught Place, New Delhi',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.5,
    reviewCount: 128,
    pricePerKwh: 15,
    operatingHours: '24/7',
    amenities: ['Parking', 'Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Ather Grid',
    latitude: 12.9716,
    longitude: 77.5946,
    address: 'MG Road, Bangalore',
    connectorTypes: ['Type 2'],
    availablePoints: 2,
    totalPoints: 2,
    rating: 4.8,
    reviewCount: 89,
    pricePerKwh: 12,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '3',
    name: 'EESL Charging Hub',
    latitude: 19.0760,
    longitude: 72.8777,
    address: 'Bandra West, Mumbai',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 0,
    totalPoints: 3,
    rating: 4.2,
    reviewCount: 156,
    pricePerKwh: 14,
    operatingHours: '6:00 AM - 11:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Kerala EV Station',
    latitude: 10.5276,
    longitude: 76.2144,
    address: 'Thrissur, Kerala',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 5,
    totalPoints: 6,
    rating: 4.6,
    reviewCount: 102,
    pricePerKwh: 13,
    operatingHours: '7:00 AM - 10:00 PM',
    amenities: ['Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '5',
    name: 'ChargeGrid Cochin',
    latitude: 9.9312,
    longitude: 76.2673,
    address: 'MG Road, Kochi, Kerala',
    connectorTypes: ['Type 2'],
    availablePoints: 4,
    totalPoints: 4,
    rating: 4.7,
    reviewCount: 87,
    pricePerKwh: 14,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Chennai EV Park',
    latitude: 13.0827,
    longitude: 80.2707,
    address: 'Marina Beach, Chennai, Tamil Nadu',
    connectorTypes: ['CCS2'],
    availablePoints: 3,
    totalPoints: 5,
    rating: 4.4,
    reviewCount: 140,
    pricePerKwh: 11,
    operatingHours: '8:00 AM - 11:00 PM',
    amenities: ['Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Hyderabad Charging Zone',
    latitude: 17.3850,
    longitude: 78.4867,
    address: 'Banjara Hills, Hyderabad, Telangana',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 6,
    totalPoints: 8,
    rating: 4.9,
    reviewCount: 200,
    pricePerKwh: 10,
    operatingHours: '24/7',
    amenities: ['Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Vizag EV Hub',
    latitude: 17.6868,
    longitude: 83.2185,
    address: 'RK Beach, Visakhapatnam, Andhra Pradesh',
    connectorTypes: ['CCS2'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.3,
    reviewCount: 92,
    pricePerKwh: 15,
    operatingHours: '24/7',
    amenities: ['Parking', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '9',
    name: 'EV Rajasthan',
    latitude: 26.9124,
    longitude: 75.7873,
    address: 'Pink City, Jaipur, Rajasthan',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 2,
    totalPoints: 3,
    rating: 4.1,
    reviewCount: 70,
    pricePerKwh: 16,
    operatingHours: '6:00 AM - 10:00 PM',
    amenities: ['Cafe', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '10',
    name: 'Udaipur Green Station',
    latitude: 24.5854,
    longitude: 73.7125,
    address: 'Fateh Sagar, Udaipur, Rajasthan',
    connectorTypes: ['Type 2'],
    availablePoints: 5,
    totalPoints: 6,
    rating: 4.5,
    reviewCount: 80,
    pricePerKwh: 14,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  // 5 more 

  {
    id: '11',
    name: 'Tata Power Charging Station',
    latitude: 28.6139,
    longitude: 77.2090,
    address: 'Connaught Place, New Delhi',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.5,
    reviewCount: 128,
    pricePerKwh: 15,
    operatingHours: '24/7',
    amenities: ['Parking', 'Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '12',
    name: 'Ather Grid',
    latitude: 12.9716,
    longitude: 77.5946,
    address: 'MG Road, Bangalore',
    connectorTypes: ['Type 2'],
    availablePoints: 2,
    totalPoints: 2,
    rating: 4.8,
    reviewCount: 89,
    pricePerKwh: 12,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '13',
    name: 'EESL Charging Hub',
    latitude: 19.0760,
    longitude: 72.8777,
    address: 'Bandra West, Mumbai',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 0,
    totalPoints: 3,
    rating: 4.2,
    reviewCount: 156,
    pricePerKwh: 14,
    operatingHours: '6:00 AM - 11:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '14',
    name: 'Kerala EV Station',
    latitude: 10.5276,
    longitude: 76.2144,
    address: 'Thrissur, Kerala',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 5,
    totalPoints: 6,
    rating: 4.6,
    reviewCount: 102,
    pricePerKwh: 13,
    operatingHours: '7:00 AM - 10:00 PM',
    amenities: ['Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },

  {
    id: '15',
    name: 'ChargeGrid Cochin',
    latitude: 9.9312,
    longitude: 76.2673,
    address: 'MG Road, Kochi, Kerala',
    connectorTypes: ['Type 2'],
    availablePoints: 4,
    totalPoints: 4,
    rating: 4.7,
    reviewCount: 87,
    pricePerKwh: 14,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '16',
    name: 'Chennai EV Park',
    latitude: 13.0827,
    longitude: 80.2707,
    address: 'Marina Beach, Chennai, Tamil Nadu',
    connectorTypes: ['CCS2'],
    availablePoints: 3,
    totalPoints: 5,
    rating: 4.4,
    reviewCount: 140,
    pricePerKwh: 11,
    operatingHours: '8:00 AM - 11:00 PM',
    amenities: ['Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '17',
    name: 'Hyderabad Charging Zone',
    latitude: 17.3850,
    longitude: 78.4867,
    address: 'Banjara Hills, Hyderabad, Telangana',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 6,
    totalPoints: 8,
    rating: 4.9,
    reviewCount: 200,
    pricePerKwh: 10,
    operatingHours: '24/7',
    amenities: ['Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '18',
    name: 'Vizag EV Hub',
    latitude: 17.6868,
    longitude: 83.2185,
    address: 'RK Beach, Visakhapatnam, Andhra Pradesh',
    connectorTypes: ['CCS2'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.3,
    reviewCount: 92,
    pricePerKwh: 15,
    operatingHours: '24/7',
    amenities: ['Parking', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '19',
    name: 'EV Rajasthan',
    latitude: 26.9124,
    longitude: 75.7873,
    address: 'Pink City, Jaipur, Rajasthan',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 2,
    totalPoints: 3,
    rating: 4.1,
    reviewCount: 70,
    pricePerKwh: 16,
    operatingHours: '6:00 AM - 10:00 PM',
    amenities: ['Cafe', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '20',
    name: 'Udaipur Green Station',
    latitude: 24.5854,
    longitude: 73.7125,
    address: 'Fateh Sagar, Udaipur, Rajasthan',
    connectorTypes: ['Type 2'],
    availablePoints: 5,
    totalPoints: 6,
    rating: 4.5,
    reviewCount: 80,
    pricePerKwh: 14,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  // In UP , MP, Bihar, Jharkhand, Odisha

  {
    id: '21',
    name: 'Tata Power Charging Station',
    latitude: 28.6139,
    longitude: 77.2090,
    address: 'Connaught Place, New Delhi',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.5,
    reviewCount: 128,
    pricePerKwh: 15,
    operatingHours: '24/7',
    amenities: ['Parking', 'Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '22',
    name: 'Ather Grid',
    latitude: 12.9716,
    longitude: 77.5946,
    address: 'MG Road, Bangalore',
    connectorTypes: ['Type 2'],
    availablePoints: 2,
    totalPoints: 2,
    rating: 4.8,
    reviewCount: 89,
    pricePerKwh: 12,
    operatingHours: '24/7',
    amenities: ['Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '23',
    name: 'EESL Charging Hub',
    latitude: 19.0760,
    longitude: 72.8777,
    address: 'Bandra West, Mumbai',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 0,
    totalPoints: 3,
    rating: 4.2,
    reviewCount: 156,
    pricePerKwh: 14,
    operatingHours: '6:00 AM - 11:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '24',
    name: 'Kerala EV Station',
    latitude: 10.5276,
    longitude: 76.2144,
    address: 'Thrissur, Kerala',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 5,
    totalPoints: 6,
    rating: 4.6,
    reviewCount: 102,
    pricePerKwh: 13,
    operatingHours: '7:00 AM - 10:00 PM',
    amenities: ['Restroom', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '25',
    name: 'EV Point Lucknow',
    latitude: 26.8467,
    longitude: 80.9462,
    address: 'Hazratganj, Lucknow, Uttar Pradesh',
    connectorTypes: ['Type 2', 'CCS2'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.3,
    reviewCount: 76,
    pricePerKwh: 13,
    operatingHours: '6:00 AM - 11:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '26',
    name: 'Tata Power Kanpur Hub',
    latitude: 26.4499,
    longitude: 80.3319,
    address: 'Civil Lines, Kanpur, Uttar Pradesh',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 2,
    totalPoints: 3,
    rating: 4.5,
    reviewCount: 98,
    pricePerKwh: 14,
    operatingHours: '24/7',
    amenities: ['Restroom', 'Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '27',
    name: 'Bhopal EV Plaza',
    latitude: 23.2599,
    longitude: 77.4126,
    address: 'New Market, Bhopal, Madhya Pradesh',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 4,
    totalPoints: 5,
    rating: 4.7,
    reviewCount: 82,
    pricePerKwh: 15,
    operatingHours: '8:00 AM - 9:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '28',
    name: 'Indore Charging Hub',
    latitude: 22.7196,
    longitude: 75.8577,
    address: 'Vijay Nagar, Indore, Madhya Pradesh',
    connectorTypes: ['Type 2', 'CCS2'],
    availablePoints: 3,
    totalPoints: 3,
    rating: 4.4,
    reviewCount: 110,
    pricePerKwh: 13,
    operatingHours: '7:00 AM - 10:00 PM',
    amenities: ['Cafe', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '29',
    name: 'Patna EV Station',
    latitude: 25.5941,
    longitude: 85.1376,
    address: 'Fraser Road, Patna, Bihar',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 4,
    totalPoints: 5,
    rating: 4.6,
    reviewCount: 88,
    pricePerKwh: 14,
    operatingHours: '6:00 AM - 11:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '30',
    name: 'Tata Power Charging - Gaya',
    latitude: 24.7955,
    longitude: 84.9994,
    address: 'Station Road, Gaya, Bihar',
    connectorTypes: ['Type 2', 'CHAdeMO'],
    availablePoints: 2,
    totalPoints: 3,
    rating: 4.2,
    reviewCount: 54,
    pricePerKwh: 12,
    operatingHours: '7:00 AM - 9:00 PM',
    amenities: ['Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '31',
    name: 'Ranchi EV Charging Point',
    latitude: 23.3441,
    longitude: 85.3096,
    address: 'Main Road, Ranchi, Jharkhand',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.5,
    reviewCount: 71,
    pricePerKwh: 13,
    operatingHours: '8:00 AM - 10:00 PM',
    amenities: ['Parking', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '32',
    name: 'Jamshedpur EV Station',
    latitude: 22.8046,
    longitude: 86.2029,
    address: 'Bistupur, Jamshedpur, Jharkhand',
    connectorTypes: ['Type 2', 'CHAdeMO'],
    availablePoints: 2,
    totalPoints: 3,
    rating: 4.3,
    reviewCount: 63,
    pricePerKwh: 14,
    operatingHours: '6:00 AM - 11:00 PM',
    amenities: ['Cafe', 'Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '33',
    name: 'Bhubaneswar Charging Plaza',
    latitude: 20.2961,
    longitude: 85.8245,
    address: 'Saheed Nagar, Bhubaneswar, Odisha',
    connectorTypes: ['CCS2', 'CHAdeMO'],
    availablePoints: 4,
    totalPoints: 5,
    rating: 4.7,
    reviewCount: 95,
    pricePerKwh: 13,
    operatingHours: '24/7',
    amenities: ['Parking', 'Cafe', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '34',
    name: 'Cuttack EV Hub',
    latitude: 20.4625,
    longitude: 85.8828,
    address: 'Badambadi, Cuttack, Odisha',
    connectorTypes: ['Type 2'],
    availablePoints: 3,
    totalPoints: 3,
    rating: 4.4,
    reviewCount: 78,
    pricePerKwh: 12,
    operatingHours: '6:00 AM - 10:00 PM',
    amenities: ['Cafe', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '35',
    name: 'Dehradun EV Hub',
    latitude: 30.3165,
    longitude: 78.0322,
    address: 'Rajpur Road, Dehradun, Uttarakhand',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 4,
    totalPoints: 5,
    rating: 4.7,
    reviewCount: 82,
    pricePerKwh: 14,
    operatingHours: '7:00 AM - 10:00 PM',
    amenities: ['Cafe', 'Parking', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '36',
    name: 'Tata Power Charging Station - Dehradun',
    latitude: 30.3165,
    longitude: 78.0567,
    address: 'ISBT, Dehradun, Uttarakhand',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.5,
    reviewCount: 96,
    pricePerKwh: 13,
    operatingHours: '24/7',
    amenities: ['Restroom', 'Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '37',
    name: 'Shimla EV Station',
    latitude: 31.1048,
    longitude: 77.1734,
    address: 'Mall Road, Shimla, Himachal Pradesh',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 2,
    totalPoints: 3,
    rating: 4.6,
    reviewCount: 87,
    pricePerKwh: 14,
    operatingHours: '6:00 AM - 9:00 PM',
    amenities: ['Parking', 'Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '38',
    name: 'Manali EV Plaza',
    latitude: 32.2396,
    longitude: 77.1887,
    address: 'Old Manali Road, Manali, Himachal Pradesh',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 2,
    totalPoints: 2,
    rating: 4.4,
    reviewCount: 72,
    pricePerKwh: 15,
    operatingHours: '8:00 AM - 8:00 PM',
    amenities: ['Cafe'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '41',
    name: 'Ahmedabad EV Station',
    latitude: 23.0225,
    longitude: 72.5714,
    address: 'Prahlad Nagar, Ahmedabad, Gujarat',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 5,
    totalPoints: 6,
    rating: 4.8,
    reviewCount: 115,
    pricePerKwh: 14,
    operatingHours: '24/7',
    amenities: ['Parking', 'Cafe', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '42',
    name: 'Surat Charging Hub',
    latitude: 21.1702,
    longitude: 72.8311,
    address: 'Adajan, Surat, Gujarat',
    connectorTypes: ['CHAdeMO', 'Type 2'],
    availablePoints: 3,
    totalPoints: 4,
    rating: 4.6,
    reviewCount: 89,
    pricePerKwh: 13,
    operatingHours: '7:00 AM - 11:00 PM',
    amenities: ['Cafe', 'Parking'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: '43',
    name: 'Vadodara EV Station',
    latitude: 22.3072,
    longitude: 73.1812,
    address: 'Sayaji Baug, Vadodara, Gujarat',
    connectorTypes: ['CCS2', 'Type 2'],
    availablePoints: 4,
    totalPoints: 5,
    rating: 4.7,
    reviewCount: 103,
    pricePerKwh: 15,
    operatingHours: '6:00 AM - 10:00 PM',
    amenities: ['Parking', 'Restroom'],
    lastUpdated: new Date().toISOString()
  },
    
];

