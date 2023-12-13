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

// Delete a track by TrackName
router.delete('/:trackName', (req, res) => {
    try {
      const trackName = req.params.trackName;
  
      // Check if the track with the given TrackName exists
      db.query('SELECT * FROM tracks WHERE TrackName = ?', [trackName], (selectError, selectResult) => {
        if (selectError) {
          console.error('Error checking track existence:', selectError);
          return res.status(500).json({ error: 'Internal Server Error during track deletion' });
        }
  
        if (selectResult.length === 0) {
          // Track with the given TrackName does not exist
          return res.status(404).json({ error: 'Track not found' });
        }
  
        // Track exists, proceed with deletion
        const deleteTrackQuery = 'DELETE FROM tracks WHERE TrackName = ?';
        db.query(deleteTrackQuery, [trackName], (deleteError, result) => {
          if (deleteError) {
            console.error('Error deleting track:', deleteError);
            return res.status(500).json({ error: 'Internal Server Error during track deletion' });
          }
  
          // Check if the track was deleted successfully
          if (result.affectedRows === 1) {
            res.status(200).json({ message: 'Track deleted successfully' });
          } else {
            res.status(500).json({ error: 'Internal Server Error during track deletion' });
          }
        });
      });
    } catch (error) {
      console.error('Error deleting track:', error);
      res.status(500).json({ error: 'Internal Server Error during track deletion' });
    }
  });

  // Update BPM and Genre of a track by TrackName
router.put('/:trackName', (req, res) => {
    const trackName = req.params.trackName;
    const { BPM, TrackGenre } = req.body;
  
    const updateQuery = 'UPDATE tracks SET BPM = ?, TrackGenre = ? WHERE TrackName = ?';
  
    db.query(updateQuery, [BPM, TrackGenre, trackName], (updateError, result) => {
      if (updateError) {
        console.error('Error updating track:', updateError);
        return res.status(500).json({ error: 'Internal Server Error during track update' });
      }
  
      if (result.affectedRows === 1) {
        res.json({ message: 'Track updated successfully' });
      } else {
        res.status(404).json({ error: 'Track not found' });
      }
    });
  });
  
module.exports = router;
