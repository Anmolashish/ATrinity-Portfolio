import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    client: String,
    type: {
      type: String,
      enum: ["commercial", "academic", "personal"],
      required: true,
    },
    technologies: [String],
    description: { type: String, required: true },
    challenges: String,
    images: [String],
    date: String,
    category: String,
    demoUrl: String,
    githubUrl: String,
  },
  { timestamps: true }
);

// Prevent model overwrite issues in dev
export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
