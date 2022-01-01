const searchByID = require('express').Router();
const { searchByIDLimit, searchByIDLimitNone } = require('../db/queries');
const pool = require('../db/index');

searchByID.get('/:id/:limit', async (req, res) => {
  const limit = req.params.limit;
  const currentQuery = limit === '0' ? searchByIDLimitNone : searchByIDLimit;
  try {
    const artist = await pool.query(currentQuery(req.params.id, Number(limit)));
    res.send(artist.rows).status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = searchByID;
