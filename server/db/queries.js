function imageSearch(imageID) {
  return `SELECT artists.artist_name, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.id = ${imageID}`;
}

function searchByIDLimit(id, limit) {
  const query = `SELECT artists.artist_name, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artists.id = '${id}' LIMIT ${limit}`;

  return query;
}

function searchByIDLimitNone(id) {
  const query = `SELECT artists.artist_name, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artists.id = '${id}'`;

  return query;
}

function produceRandomQuery() {
  let result = ``;

  for (let i = 0; i < 9; i++) {
    result += `(SELECT artists.artist_name, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = ${genRandomNum()} LIMIT 1)
    ${i < 8 ? 'UNION ALL' : ''}`;
  }
  return result;
}

function getArtistList() {
  return 'SELECT id, artist_name FROM artists ORDER BY id;';
}

function genRandomNum() {
  return Math.floor(Math.random() * 500) + 1;
}

module.exports = {
  produceRandomQuery,
  searchByIDLimit,
  searchByIDLimitNone,
  getArtistList,
  imageSearch,
};
