// SELECT *
// FROM artworks
// INNER JOIN artists
// ON artworks.artist_id = artists.artist.id

function produceRandomQuery() {
  let result = ``;

  for (let i = 0; i < 9; i++) {
    result += `(SELECT artists.artist_name, artworks.* FROM artworks JOIN artists ON artists.id = artworks.artistid WHERE artworks.artistid = ${genRandomNum()} LIMIT 1)
    ${i < 8 ? 'UNION ALL' : ''}`;
  }
  return result;
}

function genRandomNum() {
  return Math.floor(Math.random() * 500) + 1;
}

module.exports = produceRandomQuery;
