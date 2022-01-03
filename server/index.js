const express = require('express');
const path = require('path');
const randomArtists = require('./api/randomArtists');
const searchByID = require('./api/searchByID');
const getArtists = require('./api/getArtists');
const searchByImageID = require('./api/searchByImageID');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

// app.use(express.static(path.join(__dirname, '../', 'build')));

app.use('/api', getArtists);
app.use('/api', randomArtists);
app.use('/api', searchByID);
app.use('/api', searchByImageID);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../', 'build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
