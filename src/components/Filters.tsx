import React from 'react';
import { Filter, Search } from 'lucide-react';

interface FiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: StationFilters) => void;
}

export interface StationFilters {
  connectorTypes: string[];
  minRating: number;
  maxPrice: number;
  onlyAvailable: boolean;
}

const Filters: React.FC<FiltersProps> = ({ onSearch, onFilterChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filters, setFilters] = React.useState<StationFilters>({
    connectorTypes: [],
    minRating: 0,
    maxPrice: 50,
    onlyAvailable: false,
  });

  const handleFilterChange = (newFilters: Partial<StationFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white p-4 border-b">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search stations..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>

        {isOpen && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Connector Types</label>
              <div className="mt-2 space-x-2">
                {['CCS2', 'CHAdeMO', 'Type 2'].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={filters.connectorTypes.includes(type)}
                      onChange={(e) => {
                        const types = e.target.checked
                          ? [...filters.connectorTypes, type]
                          : filters.connectorTypes.filter((t) => t !== type);
                        handleFilterChange({ connectorTypes: types });
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Rating: {filters.minRating}
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={filters.minRating}
                onChange={(e) => handleFilterChange({ minRating: Number(e.target.value) })}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum Price (₹/kWh): {filters.maxPrice}
              </label>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange({ maxPrice: Number(e.target.value) })}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={filters.onlyAvailable}
                  onChange={(e) => handleFilterChange({ onlyAvailable: e.target.checked })}
                />
                <span className="ml-2 text-sm text-gray-600">Show only available stations</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;