// app/api/blog/route.js
import dbConnect from "@/lib/mongoose";
import BlogPost from "@/models/Blog";

// GET /api/blog - Fetch all blog posts
export async function GET() {
  try {
    await dbConnect();

    // Find all posts, sorted by date descending
    const posts = await BlogPost.find({})
      .sort({ date: -1 }) // Newest first
      .select("-content") // Exclude full content for listings
      .lean(); // Convert to plain JS object

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (e) {
    // console.error("Blog GET Error:", e);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch blog posts",
        details: process.env.NODE_ENV === "development" ? e.message : null,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// POST /api/blog - Create new blog post
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: title, slug, or content",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check for existing slug
    const existingPost = await BlogPost.findOne({ slug: body.slug });
    if (existingPost) {
      return new Response(
        JSON.stringify({
          error: "Slug already exists",
          existingId: existingPost._id,
        }),
        {
          status: 409,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Create new post with default values
    const newPost = await BlogPost.create({
      title: body.title,
      slug: body.slug,
      content: body.content,
      excerpt: body.excerpt || body.content.substring(0, 150) + "...",
      date: body.date || new Date(),
      category: body.category || "Uncategorized",
      readTime:
        body.readTime || `${Math.ceil(body.content.length / 1000)} min read`,
      image: body.image || "/images/blog-default.jpg",
      author: {
        name: body.author?.name || "Anonymous",
        role: body.author?.role || "Writer",
        image: body.author?.image || "/images/avatar-default.jpg",
      },
    });

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        Location: `/blog/${newPost.slug}`,
      },
    });
  } catch (e) {
    // console.error("Blog POST Error:", e);
    return new Response(
      JSON.stringify({
        error: "Failed to create blog post",
        details: process.env.NODE_ENV === "development" ? e.message : null,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// PUT /api/blog - Update existing blog post
export async function PUT(request) {
  try {
    await dbConnect();
    const body = await request.json();

    if (!body._id) {
      return new Response(
        JSON.stringify({
          error: "Missing post ID",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const updatedPost = await BlogPost.findByIdAndUpdate(
      body._id,
      {
        $set: {
          title: body.title,
          content: body.content,
          excerpt: body.excerpt,
          date: body.date,
          category: body.category,
          readTime: body.readTime,
          image: body.image,
          "author.name": body.author?.name,
          "author.role": body.author?.role,
          "author.image": body.author?.image,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    if (!updatedPost) {
      return new Response(
        JSON.stringify({
          error: "Blog post not found",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    // console.error("Blog PUT Error:", e);
    return new Response(
      JSON.stringify({
        error: "Failed to update blog post",
        details: process.env.NODE_ENV === "development" ? e.message : null,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// DELETE /api/blog - Delete blog post
export async function DELETE(request) {
  try {
    await dbConnect();
    const { _id } = await request.json();

    if (!_id) {
      return new Response(
        JSON.stringify({
          error: "Missing post ID",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const deletedPost = await BlogPost.findByIdAndDelete(_id);

    if (!deletedPost) {
      return new Response(
        JSON.stringify({
          error: "Blog post not found",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Blog post deleted successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    // console.error("Blog DELETE Error:", e);
    return new Response(
      JSON.stringify({
        error: "Failed to delete blog post",
        details: process.env.NODE_ENV === "development" ? e.message : null,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
