const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db'); 

router.post('/', async (req, res) => {
    try {
      const { Fname, Lname, Email, AccountType, Password } = req.body;
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      // Insert user data into the 'users' table
      const insertUserQuery = `
        INSERT INTO users (Fname, Lname, Email, AccountType, Password)
        VALUES (?, ?, ?, ?, ?)
      `;
  
      db.query(
        insertUserQuery,
        [Fname, Lname, Email, AccountType, hashedPassword],
        (err, result) => {
          if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            console.log('User registered successfully');
            res.status(201).json({ message: 'User registered successfully' });
          }
        }
      );
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router;