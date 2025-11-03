// routes/leadRoutes.js
const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const auth = require('../middlewares/authMiddleware');

// public: client submits lead
router.post('/submit', leadController.submitLead);

// public: fetch unclaimed leads (visible to all employees as public enquiries)
router.get('/public', leadController.fetchUnclaimedLeads);

// protected: claim a lead (assign to logged in employee)
router.post('/claim', auth, leadController.claimLead);

// protected: fetch leads claimed by logged in employee (private enquiries)
router.get('/private', auth, leadController.fetchClaimedLeads);

module.exports = router;

