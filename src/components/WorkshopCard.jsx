"use client"
import { Calendar, Users, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WorkshopCard({ workshop, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
        <div className="text-6xl">🎨</div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{workshop.title}</h3>
          <span className="bg-primary text-white px-2 py-1 rounded text-sm">
            {workshop.artForm}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{workshop.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{workshop.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>Max {workshop.maxParticipants} participants</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2" />
            <span>{workshop.difficulty}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">₹{workshop.price}</span>
          <button
            onClick={() => onBook(workshop)}
            className="bg-accent text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}