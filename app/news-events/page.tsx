import Layout from '@/components/Layout'
import { news, events } from '@/data/news-events'

export default function NewsEventsPage() {
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">News & Events</h1>
            <p className="mt-3 text-gray-600">Latest updates from IHRC Paramedical College.</p>
          </div>

          {/* News Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">News</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((n) => (
                <a
                  key={n.id}
                  href={n.href ?? '#'}
                  className="group block rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 font-medium">
                      {n.category}
                    </span>
                    <span>•</span>
                    <time dateTime={n.date}>{new Date(n.date).toLocaleDateString()}</time>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700">{n.title}</h3>
                  <p className="text-sm text-gray-600">{n.summary}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
            {events.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">
                No upcoming events at the moment. Please check back soon.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="text-xs text-gray-500 mb-2">
                      <time dateTime={e.date}>{new Date(e.date).toLocaleDateString()}</time>
                      {e.time ? <span className="ml-2">• {e.time}</span> : null}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{e.title}</h3>
                    {e.venue ? (
                      <p className="text-xs text-gray-700 mb-1">Venue: {e.venue}</p>
                    ) : null}
                    <p className="text-sm text-gray-600">{e.summary}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
