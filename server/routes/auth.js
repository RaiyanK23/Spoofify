const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db'); 

router.post('/login', async (req, res) => {
  try 
  {
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
            // Password is valid, user is authenticated
            res.status(200).json({ message: 'Login successful', user });
          } else {
            // Password is invalid
            res.status(401).json({ error: 'Invalid credentials' });
          }
        }
      }
    });
  } 
  catch (error) 
  {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;