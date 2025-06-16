import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import BlogPost from "@/models/Blog";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const post = await BlogPost.findOne({ slug: params.slug });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
