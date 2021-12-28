const searchByID = require('express').Router();
const { searchByIDLimit4, searchByIDLimitNone } = require('../queries');
const pool = require('../db');

searchByID.get('/:id/:limit', async (req, res) => {
  const limit = req.params.limit;
  console.log(req.params);
  const currentQuery = limit === '0' ? searchByIDLimitNone : searchByIDLimit4;
  try {
    const artist = await pool.query(currentQuery(req.params.id));
    res.send(artist.rows).status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = searchByID;
