const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db');

let userIdCounter;

// Initialize userIdCounter based on the highest existing UserID in the database
db.query('SELECT MAX(UserID) AS maxUserId FROM users', (err, results) => {
  if (err) {
    console.error('Error retrieving max UserID:', err);
  } else {
    userIdCounter = results[0].maxUserId || 1;
  }
});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
      const { firstName, lastName, emailAddress, accountType, password } = req.body;
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Manually increment the UserID counter
      const userId = ++userIdCounter;

      // Insert user data into the 'users' table
      const insertUserQuery = `
        INSERT INTO users (UserID, Fname, Lname, Email, AccountType, Password)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
  
      db.query(
        insertUserQuery,
        [userId, firstName, lastName, emailAddress, accountType, hashedPassword],
        (err, result) => {
          if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Internal Server Error during user registration' });
          } else {
            console.log('User registered successfully');
            res.status(201).json({ message: 'User registered successfully' });
          }
        }
      );
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ error: 'Internal Server Error during user registration' });
    }
});

module.exports = router;


