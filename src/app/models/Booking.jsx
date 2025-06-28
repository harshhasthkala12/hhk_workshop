import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  workshopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workshop',
    required: true,
  },
  participantName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
  numberOfParticipants: {
    type: Number,
    default: 1,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)