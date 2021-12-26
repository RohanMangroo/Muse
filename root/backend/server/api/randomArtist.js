const randomArtist = require('express').Router();
const pool = require('../db');

randomArtist.get('/randomArtist', async (req, res) => {
  const randomIDs = req.body.randomIDs;
  try {
    const randomArtworks = await pool.query(`
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 103 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 500 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 54 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 2 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 94 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 331 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 267 LIMIT 1)
      UNION ALL
      (SELECT artists.id, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = 444 LIMIT 1)
      `);
    res.send(randomArtworks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = randomArtist;
