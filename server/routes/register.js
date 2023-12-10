const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db');

let userIdCounter;
let artistInfoIdCounter;

// Initialize userIdCounter based on the highest existing UserID in the users table
db.query('SELECT MAX(UserID) AS maxUserId FROM users', (err, results) => {
  if (err) {
    console.error('Error retrieving max UserID:', err);
  } else {
    // Check for null or undefined and set a default value of 1
    userIdCounter = results[0].maxUserId !== null && results[0].maxUserId !== undefined
      ? results[0].maxUserId
      : 1;

    // Now, initialize artistInfoIdCounter based on the highest existing ArtistInfoID in the artistinfo table
    db.query('SELECT MAX(ArtistInfoID) AS maxArtistInfoId FROM artistinfo', (err, results) => {
      if (err) {
        console.error('Error retrieving max ArtistInfoID:', err);
      } else {
        // Check for null or undefined and set a default value of 1
        artistInfoIdCounter = results[0].maxArtistInfoId !== null && results[0].maxArtistInfoId !== undefined
          ? results[0].maxArtistInfoId
          : 1;
      }
    });
  }
});

// ... (rest of your code)



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
          return res.status(500).json({ error: 'Internal Server Error during user registration' });
        }

        console.log('User registered successfully');

        // Check if the AccountType is 'Artist' and insert into 'artistinfo' table
        if (accountType === 'Artist') {
          // Increment the ArtistInfoID counter
          const artistInfoId = ++artistInfoIdCounter;

          const insertArtistInfoQuery = `
            INSERT INTO artistinfo (ArtistInfoID, UserID, ArtistName)
            VALUES (?, ?, ?)
          `;

          db.query(
            insertArtistInfoQuery,
            [artistInfoId, userId, `${firstName} ${lastName}`],
            (artistErr, artistResult) => {
              if (artistErr) {
                console.error('Error inserting artist info:', artistErr);
                return res.status(500).json({ error: 'Internal Server Error during artist info insertion' });
              }

              console.log('Artist info inserted successfully');
              res.status(201).json({ message: 'User and artist info registered successfully' });
            }
          );
        } else {
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
