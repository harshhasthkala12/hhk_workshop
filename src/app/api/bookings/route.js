import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('handicrafts_workshop')

  if (req.method === 'POST') {
    try {
      const booking = req.body
      const result = await db.collection('bookings').insertOne(booking)
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' })
    }
  }

  if (req.method === 'GET') {
    try {
      const bookings = await db.collection('bookings').find({}).toArray()
      res.status(200).json(bookings)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bookings' })
    }
  }
}