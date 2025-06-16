import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    date: String,
    category: { type: String, required: true },
    readTime: String,
    image: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: String,
    author: {
      name: String,
      role: String,
      image: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.BlogPost ||
  mongoose.model("BlogPost", BlogPostSchema);
