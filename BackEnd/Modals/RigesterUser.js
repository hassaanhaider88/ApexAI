import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    course: [
      {
        courseId: {
          type: Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },

        moduleStatus: [
          {
            moduleIndex: Number,
            completed: {
              type: Boolean,
              default: false,
            },
          },
        ],
        CourseCertificate: {
          type: String,
          default: null,
        },
      },
    ],

    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    isCourseRegistrationApproved: {
      type: Boolean,
    },
    commits: {
      type: String,
    },
  },
  { timestamps: true }
);

const RegisterUser = model("RegisterUser", userSchema);

export default RegisterUser;
