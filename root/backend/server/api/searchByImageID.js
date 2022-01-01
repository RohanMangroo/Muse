const searchByImageID = require('express').Router();
const { imageSearch } = require('../db/queries');
const pool = require('../db/index');

searchByImageID.get('/:imageID', async (req, res) => {
  try {
    const artist = await pool.query(imageSearch(req.params.imageID));
    res.send(artist.rows).status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = searchByImageID;
