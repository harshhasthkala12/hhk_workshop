// /app/api/workshops/route.js
import clientPromise from '../../lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('handicrafts_workshop')
    const workshops = await db.collection('workshops').find({}).toArray()
    return NextResponse.json(workshops)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch workshops' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise
    const db = client.db('handicrafts_workshop')
    const body = await req.json()
    const result = await db.collection('workshops').insertOne(body)
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create workshop' }, { status: 500 })
  }
}
