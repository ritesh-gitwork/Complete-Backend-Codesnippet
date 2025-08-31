import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },

  age: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const usermodel = model("User", userSchema);

export default usermodel;
