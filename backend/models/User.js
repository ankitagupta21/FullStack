const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
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
    required: true,
  },
  phoneNo: {
    type: Number,
    required: false,
  },
  rollNo: {
    type: Number,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  section: {
    type: String,
    required: false,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
