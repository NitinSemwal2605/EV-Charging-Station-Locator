import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ChargingStation } from './types/station';
import Map from './components/Map'; // Default export
import StationList from './components/StationList';
import Filters from './components/Filters';
import { Zap } from 'lucide-react';
import { mockStations } from './data/mockStations';

function App() {
  const [stations, setStations] = useState<ChargingStation[]>([]);
  const [filteredStations, setFilteredStations] = useState<ChargingStation[]>([]);
  const [selectedStation, setSelectedStation] = useState<ChargingStation | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate API fetch with mock data
    setStations(mockStations);
    setFilteredStations(mockStations);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterStations(query);
  };

  const filterStations = (query: string) => {
    const filtered = stations.filter(station =>
      station.name.toLowerCase().includes(query.toLowerCase()) ||
      station.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStations(filtered);
  };

  const handleFilterChange = (filters: any) => {
    let filtered = stations;

    if (filters.connectorTypes.length > 0) {
      filtered = filtered.filter(station =>
        station.connectorTypes.some(type => filters.connectorTypes.includes(type))
      );
    }

    if (filters.minRating > 0) {
      filtered = filtered.filter(station => station.rating >= filters.minRating);
    }

    if (filters.maxPrice < 50) {
      filtered = filtered.filter(station => station.pricePerKwh <= filters.maxPrice);
    }

    if (filters.onlyAvailable) {
      filtered = filtered.filter(station => station.availablePoints > 0);
    }

    setFilteredStations(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">EV Charging Station Locator</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-12rem)]">
            <Filters
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
            />
            <StationList
              stations={filteredStations}
              onStationSelect={setSelectedStation}
              selectedStation={selectedStation}
            />
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg h-[calc(100vh-12rem)]">
            <Map
              stations={filteredStations}
              onMarkerClick={setSelectedStation}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
