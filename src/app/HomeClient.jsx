'use client'

import { useState, useEffect } from 'react'
import WorkshopCard from '../components/WorkshopCard'
import BookingModal from '../components/BookingModal'
import { motion } from 'framer-motion'
import { Palette, Users, Award, Heart } from 'lucide-react'

// ⬇️ Keep all your logic exactly as you had it
export default function HomeClient() {
  const [workshops, setWorkshops] = useState([])
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    fetchWorkshops()
  }, [])

  const fetchWorkshops = async () => {
    try {
      const response = await fetch('/api/workshops')
      const data = await response.json()
      setWorkshops(data)
    } catch (error) {
      console.error('Error fetching workshops:', error)
    }
  }

  const handleBookWorkshop = (workshop) => {
    setSelectedWorkshop(workshop)
    setIsBookingOpen(true)
  }

  const handleBookingSubmit = async (bookingData) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      if (response.ok) {
        alert('Booking confirmed! We will contact you soon.')
      } else {
        alert('Booking failed. Please try again.')
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      alert('Booking failed. Please try again.')
    }
  }

  return (
    <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-100 to-red-100 py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                    Discover the Magic of 
                    <span className="text-primary block">Indian Handicrafts</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Learn traditional art forms like Lippan work, Madhubani painting, and more 
                    from master craftspeople. Join our workshops and create beautiful handmade treasures.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                      Explore Workshops
                    </button>
                    <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                      View Gallery
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
    
            {/* Features Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Workshops?</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Experience authentic Indian handicrafts with expert guidance and premium materials
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { icon: Palette, title: "Authentic Techniques", desc: "Learn traditional methods passed down through generations" },
                    { icon: Users, title: "Expert Instructors", desc: "Learn from master craftspeople with decades of experience" },
                    { icon: Award, title: "Quality Materials", desc: "All materials and tools provided for the best learning experience" },
                    { icon: Heart, title: "Small Batches", desc: "Personalized attention in intimate workshop settings" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Workshops Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Workshops</h2>
                  <p className="text-gray-600">Explore our collection of traditional Indian art workshops</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {workshops.slice(0, 6).map((workshop) => (
                    <WorkshopCard
                      key={workshop._id}
                      workshop={workshop}
                      onBook={handleBookWorkshop}
                    />
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                    View All Workshops
                  </button>
                </div>
              </div>
            </section>
    
            {/* Art Forms Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Traditional Art Forms We Teach</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Lippan Work",
                      description: "Traditional mud and mirror work from Gujarat, creating stunning decorative pieces with clay and mirrors.",
                      emoji: "🪞"
                    },
                    {
                      name: "Madhubani Painting",
                      description: "Ancient folk art from Bihar featuring vibrant colors and intricate patterns depicting nature and mythology.",
                      emoji: "🎨"
                    },
                    {
                      name: "Warli Art",
                      description: "Tribal art form from Maharashtra using simple geometric shapes to tell stories of daily life.",
                      emoji: "🏺"
                    },
                    {
                      name: "Gond Painting",
                      description: "Colorful art form from Madhya Pradesh featuring dots and lines to create beautiful patterns.",
                      emoji: "🌿"
                    },
                    {
                      name: "Kalamkari",
                      description: "Hand-painted textile art using natural dyes, depicting mythological stories and floral patterns.",
                      emoji: "🌸"
                    },
                    {
                      name: "Block Printing",
                      description: "Traditional printing technique using hand-carved wooden blocks to create patterns on fabric.",
                      emoji: "🧵"
                    }
                  ].map((art, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200"
                    >
                      <div className="text-4xl mb-4">{art.emoji}</div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{art.name}</h3>
                      <p className="text-gray-600">{art.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </main>
  )
}
