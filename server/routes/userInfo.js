// routes/user.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  // Check if user is logged in by looking at the session
  if (req.session.user) {
    const userId = req.session.user.UserID;

    // Logic to fetch user information
    const getUserInfoQuery = `
      SELECT Fname, Lname FROM users
      WHERE UserID = ?
    `;

    db.query(getUserInfoQuery, [userId], (err, userInfo) => {
      if (err) {
        console.error('Error fetching user information:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (userInfo.length === 0) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json({ userInfo: userInfo[0], message: 'User information fetched successfully' });
        }
      }
    });
  } else {
    // User is not logged in
    res.status(401).json({ error: 'Not logged in' });
  }
});

module.exports = router;
