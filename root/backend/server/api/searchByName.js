const searchByName = require('express').Router();
const { searchByNameQuery } = require('../queries');
const pool = require('../db');

searchByName.get('/:name', async (req, res) => {
  try {
    const artist = await pool.query(searchByNameQuery(req.params.name));
    res.send(artist.rows).status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = searchByName;
