import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  repoLink: { type: String, required: true },
  liveLink: String,
}, { timestamps: true });

export const Project = model('Project', projectSchema);