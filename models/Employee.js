


const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
}, { timestamps: true }); // <= This adds "createdAt" and "updatedAt"
module.exports = mongoose.model('Employee', employeeSchema);
