const randomArtists = require('express').Router();
const produceRandomQuery = require('../queries');
const pool = require('../db');

randomArtists.get('/randomArtists', async (req, res) => {
  try {
    const randomArtworks = await pool.query(produceRandomQuery());
    res.send(randomArtworks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = randomArtists;
