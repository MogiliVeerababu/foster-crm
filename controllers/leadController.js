const Lead = require('../models/Lead');

exports.submitLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const lead = await Lead.create({ name, email, phone, message });
    res.status(201).json({ message: 'Lead submitted successfully', lead });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.fetchUnclaimedLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ claimedBy: null });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.claimLead = async (req, res) => {
  try {
    const { leadId } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      leadId,
      { claimedBy: req.employee.employeeId },
      { new: true }
    );
    res.json({ message: 'Lead claimed', lead });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.fetchClaimedLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ claimedBy: req.employee.employeeId });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
