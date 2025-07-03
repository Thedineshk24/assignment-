import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import eventsData from "@/data/events.json"

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  fullDescription: string
  time: string
  venue: string
  price: string
  organizer: string
  category: string
}

interface EventDetailPageProps {
  params: {
    id: string
  }
}

// Generate static params for all events
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }))
}

// Generate metadata for each event
export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const event = eventsData.find((e) => e.id === params.id) as Event | undefined

  if (!event) {
    return {
      title: "Event Not Found",
    }
  }

  return {
    title: `${event.title} - Events Explorer`,
    description: event.fullDescription,
    keywords: `${event.category}, ${event.location}, events, ${event.title}`,
    openGraph: {
      title: event.title,
      description: event.fullDescription,
      type: "article",
    },
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = eventsData.find((e) => e.id === params.id) as Event | undefined

  if (!event) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      Marketing: "bg-green-100 text-green-800",
      Business: "bg-purple-100 text-purple-800",
      Design: "bg-pink-100 text-pink-800",
      Arts: "bg-yellow-100 text-yellow-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:underline">
                Events
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate">{event.title}</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <header className="p-8 border-b border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}
                >
                  {event.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{event.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Date</div>
                      <time dateTime={event.date}>{formatDate(event.date)}</time>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Time</div>
                      <div>{event.time}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Location</div>
                      <div>{event.location}</div>
                      <div className="text-sm text-gray-600">{event.venue}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Price</div>
                      <div className="text-lg font-semibold text-green-600">{event.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <section className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Event</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">{event.fullDescription}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h4M9 7h6m-6 4h6m-6 4h6"
                    />
                  </svg>
                  <span className="text-sm">
                    <strong>Organized by:</strong> {event.organizer}
                  </span>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <footer className="p-8 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                  Register for Event
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
                  Add to Calendar
                </button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </main>
  )
}
