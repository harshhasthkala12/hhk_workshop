import mongoose from 'mongoose'

const WorkshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artForm: {
    type: String,
    required: true,
    enum: ['Lippan', 'Madhubani', 'Warli', 'Gond', 'Kalamkari', 'Block Printing']
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxParticipants: {
    type: Number,
    required: true,
  },
  materials: [String],
  scheduledDates: [Date],
  imageUrl: String,
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Workshop || mongoose.model('Workshop', WorkshopSchema)