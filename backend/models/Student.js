const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  dob: String,
  department: String,
  enrollmentYear: Number,
  isActive: Boolean,
});

module.exports = mongoose.model('Student', studentSchema);
