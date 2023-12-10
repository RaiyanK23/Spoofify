const express = require('express');
const router = express.Router();

// Code to end user sessions
router.post('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Logout successful' });
    }
  });
});

module.exports = router;
