"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import EventCard from "./event-card"
import FilterDropdown from "./filter-dropdown"

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  category: string
}

interface EventListProps {
  events: Event[]
}

export default function EventList({ events }: EventListProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")

  // Get unique locations for filter dropdown
  const locations = useMemo(() => {
    const uniqueLocations = Array.from(new Set(events.map((event) => event.location)))
    return uniqueLocations.sort()
  }, [events])

  // Filter events based on location and search term
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesLocation = selectedLocation === "all" || event.location === selectedLocation
      const matchesSearch =
        searchTerm === "" ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesLocation && matchesSearch
    })
  }, [events, selectedLocation, searchTerm])

  return (
    <section>
      {/* Filter Controls */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-64">
            <label htmlFor="search" className="sr-only">
              Search events
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <FilterDropdown
            locations={locations}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
        </div>

        <div className="text-sm text-gray-600">
          {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} found
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="block transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
            >
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </section>
  )
}
