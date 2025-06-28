const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '../.env');
console.log('Loading env from:', envPath);

const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

console.log('MONGODB_URI:', process.env.MONGODB_URI);

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("Please set MONGODB_URI in .env");
  process.exit(1);
}

// Sample workshops data
const sampleWorkshops = [
  {
    title: "Lippan Work Masterclass",
    artForm: "Lippan",
    description: "Learn the traditional Gujarati art of mud and mirror work. Create beautiful wall hangings and decorative pieces.",
    instructor: "Priya Sharma",
    duration: "4 hours",
    price: 1500,
    maxParticipants: 12,
    materials: ["Clay", "Mirrors", "Adhesive", "Brushes", "Base board"],
    difficulty: "Beginner",
    scheduledDates: ["2024-07-15", "2024-07-22", "2024-07-29"]
  },
  {
    title: "Madhubani Painting Workshop",
    artForm: "Madhubani",
    description: "Discover the vibrant folk art of Bihar. Paint traditional motifs and learn about their cultural significance.",
    instructor: "Rekha Devi",
    duration: "6 hours",
    price: 2000,
    maxParticipants: 15,
    materials: ["Canvas", "Natural colors", "Brushes", "Pencils", "Reference sheets"],
    difficulty: "Intermediate",
    scheduledDates: ["2024-07-16", "2024-07-23", "2024-07-30"]
  },
  {
    title: "Warli Art Experience",
    artForm: "Warli",
    description: "Create simple yet beautiful tribal art using basic geometric shapes and natural pigments.",
    instructor: "Ashok Patil",
    duration: "3 hours",
    price: 1200,
    maxParticipants: 20,
    materials: ["Paper", "White paint", "Brown paint", "Brushes", "Charcoal"],
    difficulty: "Beginner",
    scheduledDates: ["2024-07-17", "2024-07-24", "2024-07-31"]
  }
];

async function seed() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("hhk"); // Change to your DB name if needed
    const collection = db.collection("workshops");

    await collection.deleteMany({});
    const result = await collection.insertMany(sampleWorkshops);

    console.log(`✅ Seeded ${result.insertedCount} workshops successfully.`);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    await client.close();
  }
}

seed();
