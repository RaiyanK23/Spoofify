const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const session = require('express-session'); // Import express-session

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Set up session middleware
router.use(
  session({
    secret: 'your-secret-key', // Change this to a secure, random string
    resave: false,
    saveUninitialized: true,
  })
);

router.post('/', async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const getUserQuery = `
      SELECT * FROM users WHERE Email = ?
    `;

    db.query(getUserQuery, [Email], async (err, results) => {
      if (err) {
        console.error('Error retrieving user data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length === 0) {
          // User not found
          res.status(401).json({ error: 'Invalid credentials' });
        } else {
          const user = results[0];
          const isPasswordValid = await bcrypt.compare(Password, user.Password);

          if (isPasswordValid) {
            // Check AccountType
            if (user.AccountType === 'User' || user.AccountType === 'Admin') {
              // Password is valid, user is authenticated, and AccountType is valid
              // Store user information in the session
              req.session.user = {
                UserID: user.UserID,
                Email: user.Email,
                
                // Add other user data as needed
              };

              res.status(200).json({ message: 'Login successful', user });
            } else {
              // Invalid AccountType
              res.status(401).json({ error: 'Invalid AccountType' });
            }
          } else {
            // Password is invalid
            res.status(401).json({ error: 'Invalid credentials' });
          }
        }
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
