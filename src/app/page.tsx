import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Comparison from '@/components/Comparison'
import Demo from '@/components/Demo'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Comparison />
      <Demo />
      <Pricing />
      <Footer />
    </main>
  )
}