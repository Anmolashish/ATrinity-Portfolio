import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const project = await Project.findById(params.id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
