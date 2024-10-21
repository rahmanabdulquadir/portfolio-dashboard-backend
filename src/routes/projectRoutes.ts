import { Router } from "express";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../controllers/projectController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.post("/projects", authenticateToken, createProject);
router.get("/projects", getProjects);
// router.delete('/projects/:id', authenticateToken, deleteProject);

export default router;
