const mongoose = require('mongoose');
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course_interest: { type: String, required: false },
  claimed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', default: null }
});
module.exports = mongoose.model('Lead', leadSchema);

