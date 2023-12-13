const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Add a new album
router.post('/', (req, res) => {
  try {
    // Get album information from the request body
    const { AlbumName } = req.body;

    // Get the current maximum AlbumID
    db.query('SELECT MAX(AlbumID) AS maxAlbumID FROM album', (maxError, maxResult) => {
      if (maxError) {
        console.error('Error getting max AlbumID:', maxError);
        return res.status(500).json({ error: 'Internal Server Error during album addition' });
      }

      const maxAlbumID = maxResult[0].maxAlbumID || 0;

      // Increment AlbumID
      const newAlbumID = maxAlbumID + 1;

      // Insert the new album with the manually incremented AlbumID
      const insertAlbumQuery = 'INSERT INTO album (AlbumID, AlbumName) VALUES (?, ?)';
      db.query(insertAlbumQuery, [newAlbumID, AlbumName], (insertError, result) => {
        if (insertError) {
          console.error('Error adding album:', insertError);
          return res.status(500).json({ error: 'Internal Server Error during album addition' });
        }

        // Check if the album was added successfully
        if (result.affectedRows === 1) {
          res.status(201).json({ message: 'Album added successfully' });
        } else {
          res.status(500).json({ error: 'Internal Server Error during album addition' });
        }
      });
    });
  } catch (error) {
    console.error('Error adding album:', error);
    res.status(500).json({ error: 'Internal Server Error during album addition' });
  }
});

router.delete('/:albumName', (req, res) => {
    const albumName = req.params.albumName;
  
    db.query('DELETE FROM album WHERE AlbumName = ?', [albumName], (deleteError, result) => {
      if (deleteError) {
        console.error('Error deleting album:', deleteError);
        return res.status(500).json({ error: 'Internal Server Error during album deletion' });
      }
  
      if (result.affectedRows === 1) {
        res.json({ message: 'Album deleted successfully' });
      } else {
        res.status(404).json({ error: 'Album not found' });
      }
    });
  });

  // Update an album name
router.put('/:albumName', (req, res) => {
    const albumName = req.params.albumName;
    const newAlbumName = req.body.newAlbumName; // Assuming you provide the new album name in the request body
  
    const updateQuery = 'UPDATE album SET AlbumName = ? WHERE AlbumName = ?';
  
    db.query(updateQuery, [newAlbumName, albumName], (updateError, result) => {
      if (updateError) {
        console.error('Error updating album name:', updateError);
        return res.status(500).json({ error: 'Internal Server Error during album name update' });
      }
  
      if (result.affectedRows === 1) {
        res.json({ message: 'Album name updated successfully' });
      } else {
        res.status(404).json({ error: 'Album not found' });
      }
    });
  });

module.exports = router;
