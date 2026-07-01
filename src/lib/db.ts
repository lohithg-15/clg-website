import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function seedDatabase() {
  try {
    const News = (await import('@/models/News')).default;
    const Event = (await import('@/models/Event')).default;

    // Check count first, only seed if collections are empty to avoid deleting user data and duplicate operations in serverless
    const newsCount = await News.countDocuments();
    const eventCount = await Event.countDocuments();

    if (newsCount === 0) {
      // Seed news using MCE's active slider images for bulletproof loading
      await News.create([
        {
          title: "Admissions 2026-27 Open for BE & M.Tech Programs",
          description: "Applications are invited for admissions to undergraduate and postgraduate autonomous courses for the academic year 2026-27 under KCET, COMEDK, and Management quotas.",
          content: "Malnad College of Engineering (MCE), Hassan, announces the opening of its admission portal for the academic session 2026-27. Candidates seeking admission to B.E. and M.Tech programs under autonomous curriculum are advised to check the eligibility criteria. MCE is one of the premier institutions in Karnataka affiliated with VTU and accredited with A+ Grade by NAAC. Admissions are processed through KCET, COMEDK, and Management entry points. Interested candidates can apply online or visit the campus admission desk.",
          date: new Date(),
          featured: true,
          status: 'published',
          image: 'https://www.mcehassan.ac.in/secure-file/images?path=slider3.jpg',
          views: 120
        },
        {
          title: "MCE Hassan ranks high in VTU Academic Performance",
          description: "Malnad College of Engineering has achieved outstanding academic results in the recent VTU autonomous semester examination, with over 94% pass rate across branches.",
          content: "The academic board is proud to announce that the students of Malnad College of Engineering have shown exceptional performance in the VTU examinations. With modern infrastructure, experienced faculty guidance, and academic autonomy, MCE continues to raise the bar for technical education in the region. Special congratulations to the toppers of Computer Science, Electronics, and Mechanical streams for securing top ranks.",
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          featured: true,
          status: 'published',
          image: 'https://www.mcehassan.ac.in/secure-file/images?path=slider1.jpg',
          views: 85
        }
      ]);
      console.log("Database news seeded successfully.");
    }

    if (eventCount === 0) {
      // Seed events
      await Event.create([
        {
          title: "Malnad Fest 2K26 - Annual Cultural Fest",
          description: "Join the mega annual cultural and technical celebration featuring rock bands, fashion shows, street plays, and code hackathons.",
          date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
          time: "10:00 AM - 10:00 PM",
          location: "MCE Open Air Theatre",
          category: "cultural",
          image: "https://www.mcehassan.ac.in/secure-file/images?path=slider1.jpg",
          status: "upcoming"
        },
        {
          title: "National Conference on AI & Machine Learning",
          description: "A two-day national conference on recent trends in Artificial Intelligence, Deep Learning, and robotics, featuring guest speakers from IISc and top tech labs.",
          date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          time: "09:30 AM - 05:30 PM",
          location: "MCE Silver Jubilee Seminar Hall",
          category: "technical",
          image: "https://www.mcehassan.ac.in/secure-file/images?path=slider3.jpg",
          status: "upcoming"
        },
        {
          title: "Orientation Day for First-Year Students",
          description: "Official welcome and orientation program for the incoming batch of 2026-27 BE students and parents, detailing academic autonomy and rules.",
          date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
          time: "10:00 AM - 01:00 PM",
          location: "MCE Indoor Sports Complex",
          category: "academic",
          image: "https://www.mcehassan.ac.in/secure-file/images?path=slider2.jpg",
          status: "upcoming"
        }
      ]);
      console.log("Database events seeded successfully.");
    }
  } catch (error) {
    console.error('Seeding error:', error);
  }
}

let seedingPromise: Promise<void> | null = null;

async function dbConnect() {
  if (cached.conn) {
    if (!seedingPromise) {
      seedingPromise = seedDatabase().catch((err) => {
        console.error('Seeding promise error:', err);
        seedingPromise = null;
      });
    }
    await seedingPromise;
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Fail fast if connection is not established in 5s (helps Vercel handle cold starts and avoid 504 timeouts)
    };

    cached.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
    if (!seedingPromise) {
      seedingPromise = seedDatabase().catch((err) => {
        console.error('Seeding promise error:', err);
        seedingPromise = null;
      });
    }
    await seedingPromise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
