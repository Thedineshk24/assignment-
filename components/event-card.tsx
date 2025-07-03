interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  category: string
}

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
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
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}
          >
            {event.category}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{event.title}</h2>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <time dateTime={event.date}>{formatDate(event.date)}</time>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{event.location}</span>
        </div>

        <p className="text-gray-700 text-sm flex-grow line-clamp-3">{event.description}</p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details →</span>
        </div>
      </div>
    </article>
  )
}
