const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// Search for albums and songs
router.get('/:searchTerm', (req, res) => {
  try {
    const searchTerm = req.params.searchTerm;

    // You can customize the query based on your database structure
    const searchQuery = `
      SELECT AlbumName, 'album' AS type
      FROM album
      WHERE AlbumName LIKE ?
      UNION
      SELECT TrackName, 'song' AS type
      FROM tracks
      WHERE TrackName LIKE ?
    `;

    db.query(searchQuery, [`%${searchTerm}%`, `%${searchTerm}%`], (queryError, queryResult) => {
      if (queryError) {
        console.error('Error searching:', queryError);
        return res.status(500).json({ error: 'Internal Server Error during search' });
      }

      const searchResults = queryResult.map((result) => ({
        name: result.AlbumName || result.TrackName,
        type: result.type,
      }));

      res.json({ searchResults });
    });
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal Server Error during search' });
  }
});

module.exports = router;
