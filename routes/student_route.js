import { Router } from "express";
import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student_controller.js";

export const studentRouter = Router();

studentRouter.post("/student", createStudent);
studentRouter.get("/student", getStudents);
studentRouter.get("/student/:id", getStudent);
studentRouter.patch("/student/:id", updateStudent);
studentRouter.delete("/student/delete/:id", deleteStudent);

export default studentRouter;
