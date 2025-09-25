export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Build Your Future in <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Healthcare</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Industry‑aligned programs, hands‑on training, and expert mentorship at Imphal Hospital and Research Centre Paramedical College.
        </p>
        <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
          Explore our programs and secure your seat for the upcoming academic session.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow hover:opacity-95 transition"
            href="/courses"
          >
            <span className="mr-2">Explore Courses</span>
            <span aria-hidden>→</span>
          </a>
          <a
            className="inline-block bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition"
            href="/admissions"
          >
            Admissions 2025
          </a>
        </div>
      </div>
    </section>
  )
}
