import { Schema, model } from "mongoose";

const CourseSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: String,
      required: true,
    },
    fee: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    students: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    modules: {
      type: Array,
      required: true,
    },
    benefits: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = model("Course", CourseSchema);

export default Course;
