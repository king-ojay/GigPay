const express = require('express');
const router = express.Router();

// @route   POST api/payments
// @desc    Handle payment processing
// @access  Private
router.post('/', (req, res) => {
  res.send('Payment processed (stub)');
});

module.exports = router;

