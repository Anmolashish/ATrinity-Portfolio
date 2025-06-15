import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project"; // You'll need to create this model

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({});

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const project = await Project.create(body);

    return new Response(JSON.stringify(project), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function PUT(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const project = await Project.findByIdAndUpdate(body._id, body, {
      new: true,
    });

    return new Response(JSON.stringify(project), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const { _id } = await request.json();

    await Project.findByIdAndDelete(_id);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
