import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    rollNumber: {
      type: String,
      require: true,
    },

    subject: {
      type: String,
      require: true,
    },

    grade: {
      type: Number,
      require: true,
      min: 0,
      max: 100,
    },

    Date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export const Student = mongoose.model("student", studentSchema);
