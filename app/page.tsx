import { Navigation, Hero, Features, RoomShowcase, CTA, Footer } from '@/components/sections'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Features />
      <RoomShowcase />
      <CTA />
      <Footer />
    </main>
  )
}
