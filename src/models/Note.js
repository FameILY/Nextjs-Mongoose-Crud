import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Note =
  mongoose.models.Notes || mongoose.model("Notes", noteSchema);

export default Note;