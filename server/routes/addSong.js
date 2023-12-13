const express = require('express');
const router = express.Router();
const db = require('../config/db'); 

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Add a new track
router.post('/', (req, res) => {
  try {
    // Get track information from the request body
    const { TrackName, BPM, TrackGenre } = req.body;

    // Get the current maximum TrackID
    db.query('SELECT MAX(TrackID) AS maxTrackID FROM tracks', (maxError, maxResult) => {
      if (maxError) {
        console.error('Error getting max TrackID:', maxError);
        return res.status(500).json({ error: 'Internal Server Error during track addition' });
      }

      const maxTrackID = maxResult[0].maxTrackID || 0;

      // Increment TrackID
      const newTrackID = maxTrackID + 1;

      // Insert the new track with the manually incremented TrackID
      const insertTrackQuery = 'INSERT INTO tracks (TrackID, TrackName, BPM, TrackGenre) VALUES (?, ?, ?, ?)';
      db.query(insertTrackQuery, [newTrackID, TrackName, BPM, TrackGenre], (insertError, result) => {
        if (insertError) {
          console.error('Error adding track:', insertError);
          return res.status(500).json({ error: 'Internal Server Error during track addition' });
        }

        // Check if the track was added successfully
        if (result.affectedRows === 1) {
          res.status(201).json({ message: 'Track added successfully' });
        } else {
          res.status(500).json({ error: 'Internal Server Error during track addition' });
        }
      });
    });
  } catch (error) {
    console.error('Error adding track:', error);
    res.status(500).json({ error: 'Internal Server Error during track addition' });
  }
});

module.exports = router;
