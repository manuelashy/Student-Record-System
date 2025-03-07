import express from "express";
// import "dotenv/config";
import studentRouter from "./routes/student_route.js";
import mongoose from "mongoose";

// database connecttion
await mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());

app.use(studentRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
