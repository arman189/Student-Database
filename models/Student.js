const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: [String], required: true },
  total_marks: { type: Number, required: true },
});

module.exports = mongoose.model("student", studentSchema);
