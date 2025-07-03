"use client"

interface FilterDropdownProps {
  locations: string[]
  selectedLocation: string
  onLocationChange: (location: string) => void
}

export default function FilterDropdown({ locations, selectedLocation, onLocationChange }: FilterDropdownProps) {
  return (
    <div className="w-full sm:w-48">
      <label htmlFor="location-filter" className="sr-only">
        Filter by location
      </label>
      <select
        id="location-filter"
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
      >
        <option value="all">All Locations</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  )
}
