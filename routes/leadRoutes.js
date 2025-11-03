const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// POST: /api/leads/submit
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, course_interest } = req.body;

    // Basic validation
    if (!name || !email || !course_interest) {
      return res.status(400).json({ message: "Name, email, and course_interest are required." });
    }

    const newLead = new Lead({
      name,
      email,
      phone,
      course_interest,
    });

    await newLead.save();

    res.status(201).json({
      message: "Lead created successfully",
      lead: newLead,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// GET: /api/leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch leads",
      error: error.message,
    });
  }
});

module.exports = router;
