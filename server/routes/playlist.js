
const express = require('express');
const router = express.Router();
const db = require('../config/db'); 

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// Create a new playlist
router.post('/', async (req, res) => {
  try {
    // Logic to create a new playlist
    const { PlaylistName } = req.body;

    // Get the UserID from the session
    const userIdFromSession = req.session.user ? req.session.user.UserID : null;

    // Check the max PlaylistSongsID
    let maxPlaylistSongsID = 1; // Default value
    const maxIdQuery = 'SELECT MAX(PlaylistSongsID) AS maxId FROM playlist';
    const maxIdResult = await db.query(maxIdQuery);

    if (maxIdResult && maxIdResult[0].maxId !== null) {
      maxPlaylistSongsID = maxIdResult[0].maxId + 1;
    }

    // Insert new playlist into the 'playlist' table
    const insertPlaylistQuery = `
      INSERT INTO playlist (PlaylistSongsID, PlaylistUserID, PlaylistName)
      VALUES (?, ?, ?)
    `;

    await db.query(insertPlaylistQuery, [maxPlaylistSongsID, userIdFromSession, PlaylistName]);

    res.status(201).json({ message: 'Playlist created successfully' });
  } catch (error) {
    console.error('Error creating playlist:', error);
    res.status(500).json({ error: 'Internal Server Error during playlist creation' });
  }
});

router.get('/', (req, res) => {
  // Check if user is logged in by looking at the session
  if (req.session.user) {
    const userId = req.session.user.UserID;

    // Logic to fetch all playlists for the current user
    const getPlaylistsQuery = `
      SELECT * FROM playlist
      WHERE PlaylistUserID = ?
    `;

    db.query(getPlaylistsQuery, [userId], (err, playlists) => {
      if (err) {
        console.error('Error fetching playlists:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ playlists, message: 'Playlists fetched successfully' });
      }
    });
  } else {
    // User is not logged in
    res.status(401).json({ error: 'Not logged in' });
  }
});

module.exports = router;
