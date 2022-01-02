const getArtists = require('express').Router();
const { getArtistList } = require('../db/queries');
const pool = require('../db/index');

getArtists.get('/artists', async (req, res) => {
  try {
    // const randomArtworks = await pool.query(getArtistList());
    // res.send(randomArtworks.rows).status(200);
    res.send('hello from the /artist endpoint').status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = getArtists;
