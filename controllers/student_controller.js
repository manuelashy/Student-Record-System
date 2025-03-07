import { json } from "express";
import { Student } from "../models/student_model.js";

export const createStudent = async (req, res) => {
  //   try {
  const student = new Student(req.body);
  const newStudent = await student.save();
  res.status(200).json({ student: newStudent });
  //   } catch (error) {
  //     next(error);
  //   }
};

export const getStudents = async (req, res) => {
  const allStudents = await Student.find();
  res.status(200).json({ student: allStudents });
};

export const getStudent = async (req, res) => {
  const singleStudent = await Student.findById(req.params.id);
  res.status(200).json({ student: singleStudent });
};

export const updateStudent = async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,

    { new: true, runValidators: true }
  );
  res.json({ update: updatedStudent });
};

export const deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id, req.body);
  res.json({ delete: deleteStudent });
};
