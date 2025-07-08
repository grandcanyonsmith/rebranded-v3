'use client'

import { useState } from 'react'
import { Star, Play } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Fitness Coach',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    date: '2024-05-18',
    stars: 5,
    reviewTitle: "Transformed my business!",
    reviewText: "Course Creator 360 helped me launch my fitness course in just two weeks. The templates are amazing and the support is top-notch. I made my first $10k in the first month!"
  },
  {
    name: 'Michael Chen',
    title: 'Business Consultant',
    initials: 'MC',
    date: '2024-05-15',
    stars: 5,
    reviewTitle: "All-in-one is an understatement",
    reviewText: "I was using 5 different tools before switching to CC360. Now everything is in one place, from my website to my email marketing. It's a game-changer for my productivity."
  },
  {
    name: 'Emily Rodriguez',
    title: 'Language Teacher',
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=80&h=80&fit=crop',
    date: '2024-05-12',
    stars: 5,
    reviewTitle: "So easy to use!",
    reviewText: "I'm not a tech-savvy person, but CC360 made it so simple to create and sell my language courses. The community feature is also fantastic for engaging with my students."
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Build Your Course Empire<br />
              <span className="text-blue-600">Without the Tech Headache</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Course Creator 360 is the all-in-one platform that replaces 12+ tools. 
              Launch your course in days, not months, with battle-tested templates and automation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </button>
            </form>
          </div>
          <div className="relative">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://customer-t943x570k2jy8ms2.cloudflarestream.com/f826389a5190704881329a11411d30d2/watch"
                title="Course Creator 360 Demo"
                className="w-full h-full"
                allow="autoplay; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white/90 backdrop-blur-sm rounded-t-[3rem] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What our customers say about us
          </h2>
          <div className="flex items-center justify-center gap-1 mb-12">
            <span className="text-xl font-semibold">5.00</span>
            <Star className="w-5 h-5 text-blue-600 fill-current" />
            <span className="text-gray-600 ml-2">{testimonials.length} reviews</span>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex gap-6 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-none w-80 bg-white rounded-xl p-6 shadow-lg transition-transform duration-300 ${
                    index === currentIndex ? 'scale-105' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-3 text-white font-bold">
                        {testimonial.initials}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-blue-600 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{testimonial.reviewTitle}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.reviewText}</p>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}