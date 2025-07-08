import { Check } from 'lucide-react'

const comparisonData = [
  {
    logos: [
      'https://logosandtypes.com/wp-content/uploads/2024/11/Kajabi.png',
      'https://cdn.prod.website-files.com/61bec4e6d491fc564ab7f7a5/63bc16e60bfa7a030aea6b2c_teachable%20icon.svg',
      'https://images.seeklogo.com/logo-png/39/1/thinkific-logo-png_seeklogo-394202.png'
    ],
    feature: 'Course building & hosting',
    price: '$149+/mo.'
  },
  {
    logos: [
      'https://logo.clearbit.com/skool.com',
      'https://logo.clearbit.com/mightynetworks.com',
      'https://logo.clearbit.com/circle.so'
    ],
    feature: 'Community & gamification',
    price: '$99+/mo.'
  },
  {
    logos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60d2dWuZ_Oog7KD7NlN689Ap7wM4s7qcg2A&s',
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg',
      'https://s3.amazonaws.com/integrated-apps/zgriluef/fdguscwv.jpg'
    ],
    feature: 'Email sending & CRM',
    price: '$199+/mo.'
  },
  {
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Squarespace_Logo_2019.png',
      'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg'
    ],
    feature: 'Website & page building',
    price: '$35+/mo.'
  },
  {
    logos: [
      'https://pageflows.com/media/logos/cf_FQhG2sN.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrewqdwAY9gKyF_C2iLZzmZZjZA6bkYjqMow&s'
    ],
    feature: 'Funnel building',
    price: '$199+/mo.'
  },
  {
    logos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAupoS43WFWeqjq_BGoBopW_j1tNPzdQe8Hw&s',
      'https://logo.clearbit.com/honeybook.com'
    ],
    feature: 'Calendar booking',
    price: '$49+/mo.'
  }
]

export default function Comparison() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="comparison">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white border border-blue-500">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            "I cancelled all these softwares within 14 days."
          </h2>
          
          {/* Header - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-6 text-sm font-semibold text-blue-200">
            <div className="text-right pr-2">REPLACES</div>
            <div className="pl-4">FEATURES</div>
            <div className="pl-2">PRICE</div>
            <div className="text-center"></div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                {/* Logos */}
                <div className="flex justify-end gap-1 pr-2">
                  {item.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      alt=""
                      className="w-9 h-9 rounded-full bg-white object-contain"
                    />
                  ))}
                </div>

                {/* Feature & inline price (mobile) */}
                <div className="flex flex-col pl-4">
                  <div className="font-semibold text-white">{item.feature}</div>
                  <div className="text-sm text-gray-300 md:hidden">{item.price}</div>
                </div>

                {/* Desktop price column */}
                <div className="hidden md:block text-sm text-gray-300 pl-2">
                  {item.price}
                </div>

                {/* Check mark */}
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-slate-900" strokeWidth={3} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total pricing */}
          <div className="flex justify-between items-end mt-12 pt-8 border-t border-slate-700">
            <div className="text-2xl font-semibold text-red-400 line-through">
              $1400+/mo
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white">$79</div>
              <div className="text-sm text-gray-400">Starting plan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}