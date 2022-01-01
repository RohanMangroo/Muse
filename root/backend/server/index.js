const express = require('express');
// const path = require('path');
const randomArtists = require('./api/randomArtists');
const searchByID = require('./api/searchByID');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

// app.use(express.static(path.join(__dirname, '../../', 'frontend/build')));

app.use('/api', randomArtists);
app.use('/api', searchByID);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../', 'frontend/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
