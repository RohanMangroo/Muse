const express = require('express');
const path = require('path');
const randomArtist = require('./api/randomArtist');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../', 'frontend/build')));

app.use('/api', randomArtist);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
