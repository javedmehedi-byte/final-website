export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Healthcare Career?
        </h2>
  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
