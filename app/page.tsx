import type { Metadata } from "next"
import EventList from "@/components/event-list"
import eventsData from "@/data/events.json"

export const metadata: Metadata = {
  title: "Events Explorer - Discover Amazing Events Near You",
  description:
    "Explore and discover amazing events in your area. From tech conferences to creative workshops, find the perfect event for you.",
  keywords: "events, conferences, workshops, networking, tech events, business events",
  openGraph: {
    title: "Events Explorer - Discover Amazing Events Near You",
    description:
      "Explore and discover amazing events in your area. From tech conferences to creative workshops, find the perfect event for you.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Events Explorer</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing events happening around you. From tech conferences to creative workshops, find the perfect
            event to expand your horizons.
          </p>
        </header>

        <EventList events={eventsData} />
      </div>
    </main>
  )
}
