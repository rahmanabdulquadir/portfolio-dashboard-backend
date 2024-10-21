import { Request, Response } from "express";
import { Project } from "../models/Project";

export const createProject = async (req: Request, res: Response) => {
  const { title, description, techStack, repoLink, liveLink } = req.body;

  try {
    const project = new Project({
      title,
      description,
      techStack,
      repoLink,
      liveLink,
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
