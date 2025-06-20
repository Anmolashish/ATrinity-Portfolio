import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 30000,
      authSource: "admin",
      tls: true, // Use tls instead of ssl
      tlsAllowInvalidCertificates: false, // Proper TLS validation
    });

    connection.isConnected = db.connections[0].readyState;
    // console.log("MongoDB Connected Successfully");
  } catch (error) {
    // console.error("MongoDB Connection Error:", error);
    throw new Error(`Database connection failed: ${error.message}`);
  }
}

export default dbConnect;
