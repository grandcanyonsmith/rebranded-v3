export default function Demo() {
  return (
    <section className="py-16 px-6" id="demo">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
          {/* Floating money animation */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://cc360-pages.s3.us-west-2.amazonaws.com/assets/money-floating-transparent.webp"
              alt="Floating money"
              className="w-36 h-36 lg:w-48 lg:h-48 animate-bounce"
            />
          </div>

          {/* Value Proposition */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Proven by<br />
            <span className="text-lime-400">$30,000,000</span>&nbsp;in Digital Sales
          </h2>
          
          <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            We've personally built and sold $30M+ in digital products to 40,000+ creators, coaches, and experts. 
            We know what works — and we packaged it for you.
          </p>

          {/* CTA Button */}
          <a
            href="https://go.coursecreator360.com/cc360-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Book A Demo
          </a>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-lime-400 text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cc360-pages.s3.us-west-2.amazonaws.com/assets/course-page-mockup.webp"
                alt="Battle-tested templates"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <p className="text-lg font-bold">
                Battle-tested<br />Templates
              </p>
            </div>

            <div className="bg-lime-400 text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cc360-pages.s3.us-west-2.amazonaws.com/assets/milestone-blueprint-progress.webp"
                alt="Step-by-step blueprints"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <p className="text-lg font-bold">
                Step-by-step<br />Blueprints
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}