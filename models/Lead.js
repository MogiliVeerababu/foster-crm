const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  course_interest: { type: String, required: true },
  claimed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', default: null },
});

const Lead = mongoose.model('Lead', LeadSchema);

module.exports = Lead;
