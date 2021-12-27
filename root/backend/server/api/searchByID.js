const searchByID = require('express').Router();
const { searchByIDQuery } = require('../queries');
const pool = require('../db');

searchByID.get('/:name', async (req, res) => {
  try {
    const artist = await pool.query(searchByIDQuery(req.params.name));
    res.send(artist.rows).status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = searchByID;
