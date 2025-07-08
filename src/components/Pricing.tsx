'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    monthlyPrice: 79,
    yearlyPrice: 63,
    features: [
      'Up to 1,000 students',
      '5 courses',
      'Basic templates',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Pro',
    subtitle: 'For growing creators',
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      'Up to 10,000 students',
      'Unlimited courses',
      'Advanced templates',
      'Priority support',
      'Advanced analytics'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      'Unlimited students',
      'Custom integrations',
      'White-label options',
      'Dedicated support'
    ],
    popular: false
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-16 px-6 bg-slate-900 text-white" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
          Simple, Transparent Pricing
        </h1>
        
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-slate-800 rounded-xl p-1 w-80 h-14">
            <div
              className={`absolute inset-y-1 w-1/2 bg-blue-600 rounded-lg transition-transform duration-300 ${
                isYearly ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 w-1/2 h-full text-sm font-semibold transition-colors ${
                !isYearly ? 'text-white' : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 w-1/2 h-full text-sm font-semibold transition-colors ${
                isYearly ? 'text-white' : 'text-gray-400'
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-blue-50 text-slate-900 rounded-xl p-6 relative ${
                plan.popular ? 'ring-4 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <p className="text-sm text-slate-600 mb-4">{plan.subtitle}</p>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-slate-600 ml-1">/month</span>
                </div>
                
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}