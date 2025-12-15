import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  course: [{
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }],

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
