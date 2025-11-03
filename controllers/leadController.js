const Lead = require('../models/Lead');

exports.submitLead = async (req, res) => {
  const { name, email, course_interest } = req.body;
  const lead = new Lead({ name, email, course_interest });
  await lead.save();
  res.json({ message: 'Lead submitted', lead });
};

exports.fetchUnclaimedLeads = async (req, res) => {
  const leads = await Lead.find({ claimed_by: null });
  res.json({ leads });
};

exports.claimLead = async (req, res) => {
  const { leadId } = req.body;
  const lead = await Lead.findById(leadId);
  if (!lead || lead.claimed_by) return res.status(400).json({ error: 'Lead not found or already claimed' });
  lead.claimed_by = req.user.id;
  await lead.save();
  res.json({ message: 'Lead claimed', lead });
};

exports.fetchClaimedLeads = async (req, res) => {
  const leads = await Lead.find({ claimed_by: req.user.id });
  res.json({ leads });
};
