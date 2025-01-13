import mongoose from "mongoose"; // import mongoose

const userSchema = new mongoose.Schema({
  // first name
  fname: {
    type: String,
    required: true,
  },
  // last name
  lname: {
    type: String,
    required: true,
  },
  // email
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // password
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.module("User", userSchema); // export the model
