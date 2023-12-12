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

    // Check the max PlaylistSongsID
    let maxPlaylistSongsID = 1; // Default value
    const maxIdQuery = 'SELECT MAX(PlaylistSongsID) AS maxId FROM playlist';
    
    // Use the promise-based approach
    const [maxIdResult] = await db.promise().query(maxIdQuery);

    if (maxIdResult && maxIdResult[0] && maxIdResult[0].maxId !== null) {
      maxPlaylistSongsID = maxIdResult[0].maxId + 1;
    }

    // Insert new playlist into the 'playlist' table
    const insertPlaylistQuery = `
      INSERT INTO playlist (PlaylistSongsID, PlaylistUserID, PlaylistName)
      VALUES (?, ?, ?)
    `;

    await db.promise().query(insertPlaylistQuery, [maxPlaylistSongsID, maxPlaylistSongsID, PlaylistName]);

    res.status(201).json({ message: 'Playlist created successfully' });
  } catch (error) {
    console.error('Error creating playlist:', error);
    res.status(500).json({ error: 'Internal Server Error during playlist creation' });
  }
});


router.get('/', async (req, res) => {
  try {
    const getPlaylistsQuery = 'SELECT * FROM playlist';

    const [playlists] = await db.promise().query(getPlaylistsQuery);

    res.json({ playlists, message: 'All playlists fetched successfully' });
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
