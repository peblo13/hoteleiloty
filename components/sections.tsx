'use client'

import { useEffect, useState } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-6'}`}>
      <div className="container-main flex items-center justify-between">
        <div className="gradient-text text-2xl font-bold">EILOTY</div>
        
        <div className="hidden md:flex gap-12 items-center">
          <a href="#" className="hover:text-primary transition-colors">Rooms</a>
          <a href="#" className="hover:text-primary transition-colors">Experiences</a>
          <a href="#" className="hover:text-primary transition-colors">Dining</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg hover:scale-105">
          Reserve Now
        </button>
      </div>
    </nav>
  )
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent opacity-15 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main text-center space-y-8 animate-fade-in">
        <h1 className="gradient-text text-6xl md:text-7xl font-black">
          The Future of<br />Luxury Awaits
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Experience transcendental hospitality where AI-driven innovation meets timeless elegance in an architectural marvel designed for tomorrow.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold text-lg hover:shadow-lg hover:scale-105">
            Explore Suites
          </button>
          <button className="px-10 py-4 rounded-lg border border-primary/50 text-primary font-bold text-lg hover:bg-primary/10">
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const features = [
    {
      title: 'Neural Concierge',
      description: 'AI-powered personalized service available 24/7 for all your needs',
      icon: '✦',
      color: 'from-primary to-purple-600',
    },
    {
      title: 'Quantum Comfort',
      description: 'Adaptive environments that learn and adjust to your preferences',
      icon: '◆',
      color: 'from-secondary to-cyan-400',
    },
    {
      title: 'Ethereal Dining',
      description: 'Michelin-starred cuisine crafted by award-winning chefs',
      icon: '◇',
      color: 'from-accent to-pink-500',
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container-main">
        <h2 className="gradient-text text-5xl font-black mb-20 text-center">
          Extraordinary Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group glass hover:glow-primary rounded-2xl p-8 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RoomShowcase() {
  const rooms = [
    {
      name: 'Infinity Suite',
      description: 'Panoramic views with holographic walls',
      image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    },
    {
      name: 'Aurora Chamber',
      description: 'Bioluminescent ceiling that mimics natural light',
      image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    },
    {
      name: 'Serenity Pod',
      description: 'Zero-gravity wellness center with meditation zones',
      image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
    },
  ]

  return (
    <section className="py-24">
      <div className="container-main">
        <h2 className="gradient-text text-5xl font-black mb-16 text-center">
          Signature Accommodations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl glass"
            >
              <div className={`${room.image} w-full h-64`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-foreground/70 mb-4">{room.description}</p>
                <button className="text-primary font-semibold hover:gap-2 gap-0 flex items-center transition-all">
                  Discover <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-24">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl glass-dark p-16 text-center border-gradient">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent -z-10"></div>
          
          <h2 className="gradient-text text-5xl font-black mb-6">
            Ready to Transcend?
          </h2>
          
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Your journey into the future of hospitality begins now. Secure your escape to tomorrow.
          </p>

          <button className="px-12 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold text-lg hover:shadow-lg hover:scale-105">
            Book Your Experience
          </button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-24">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="gradient-text text-2xl font-bold mb-4">EILOTY</div>
            <p className="text-foreground/70">Redefining luxury hospitality for the future.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-primary">Dining</a></li>
              <li><a href="#" className="hover:text-primary">Experiences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 text-center text-foreground/50">
          <p>© 2025 Hotel Eiloty. All rights reserved. | Crafted for tomorrow</p>
        </div>
      </div>
    </footer>
  )
}
