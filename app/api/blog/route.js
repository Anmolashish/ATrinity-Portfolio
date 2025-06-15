import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Example for projects API route
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("your-db-name");
    const projects = await db.collection("projects").find({}).toArray();

    // Ensure we return an array even if empty
    return new Response(JSON.stringify(projects || []), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name");
    const body = await request.json();

    const result = await db.collection("blog").insertOne(body);

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name");
    const body = await request.json();

    const result = await db
      .collection("blog")
      .updateOne({ _id: new ObjectId(body._id) }, { $set: body });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name");
    const body = await request.json();

    await db.collection("blog").deleteOne({
      _id: new ObjectId(body._id),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
