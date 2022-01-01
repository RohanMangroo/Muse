const randomArtists = require('express').Router();
const { produceRandomQuery } = require('../db/queries');
const pool = require('../db/index');

randomArtists.get('/randomArtists', async (req, res) => {
  try {
    const randomArtworks = await pool.query(produceRandomQuery());
    res.send(randomArtworks.rows).status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = randomArtists;
