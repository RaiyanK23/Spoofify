const express = require('express');
const router = express.Router();
const db = require('../config/db');


router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// Route to add a song to a playlist
router.post('/', async (req, res) => {
  try {
    const { PlaylistID, TrackID } = req.body;

    // Get the max PlaylistSongsID or set default to 1 if no entries
    const getMaxPlaylistSongsIDQuery = `
      SELECT IFNULL(MAX(PlaylistSongsID), 0) AS MaxPlaylistSongsID
      FROM playlistsongs;
    `;

    db.query(getMaxPlaylistSongsIDQuery, async (err, result) => {
      if (err) {
        console.error('Error getting max PlaylistSongsID:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const maxPlaylistSongsID = result[0].MaxPlaylistSongsID + 1;

      // Insert the new entry into the playlistsongs table
      const insertSongQuery = `
        INSERT INTO playlistsongs (PlaylistSongsID, PlaylistID, TrackID)
        VALUES (?, ?, ?);
      `;

      db.query(insertSongQuery, [maxPlaylistSongsID, PlaylistID, TrackID], (err) => {
        if (err) {
          console.error('Error adding song to playlist:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json({ message: 'Song added to playlist successfully' });
      });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to get songs from a playlist
router.get('/', (req, res) => {
const playlistID = req.params.playlistID;

// Fetch all songs for the specified playlist
const getSongsQuery = `
    SELECT * FROM playlistsongs
    WHERE PlaylistID = ?;
`;

db.query(getSongsQuery, [playlistID], (err, songs) => {
    if (err) {
    console.error('Error fetching songs from playlist:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json({ songs, message: 'Songs fetched successfully' });
});
});


module.exports = router;
