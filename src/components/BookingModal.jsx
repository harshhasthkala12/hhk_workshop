"use client"
import { useState } from 'react'
import { X, Calendar } from 'lucide-react'

export default function BookingModal({ workshop, isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    participantName: '',
    email: '',
    phone: '',
    selectedDate: '',
    numberOfParticipants: 1
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ ...formData, workshopId: workshop._id, totalAmount: workshop.price * formData.numberOfParticipants })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Book Workshop</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-4 p-3 bg-gray-50 rounded">
          <h3 className="font-semibold">{workshop.title}</h3>
          <p className="text-sm text-gray-600">{workshop.artForm} - {workshop.duration}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              value={formData.participantName}
              onChange={(e) => setFormData({...formData, participantName: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date</label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              value={formData.selectedDate}
              onChange={(e) => setFormData({...formData, selectedDate: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Number of Participants</label>
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              value={formData.numberOfParticipants}
              onChange={(e) => setFormData({...formData, numberOfParticipants: parseInt(e.target.value)})}
            >
              {[...Array(workshop.maxParticipants)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          
          <div className="bg-gray-50 p-3 rounded">
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="font-bold">₹{workshop.price * formData.numberOfParticipants}</span>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90 transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}
