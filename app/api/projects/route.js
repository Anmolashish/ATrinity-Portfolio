import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";

// GET /api/projects - Fetch all projects
export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json(projects, { status: 200 });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// POST /api/projects - Create a new project
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// PUT /api/projects - Update a project
export async function PUT(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const project = await Project.findByIdAndUpdate(body._id, body, {
      new: true,
    });
    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// DELETE /api/projects - Delete a project
export async function DELETE(request) {
  try {
    await dbConnect();
    const { _id } = await request.json();
    await Project.findByIdAndDelete(_id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error("MongoDB Error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
