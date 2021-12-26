const express = require('express');
const randomArtist = require('./api/randomArtist');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/', (req, res) =>
  res.sendFile('/Users/rohan/muse-app/root/frontend/public/index.html')
);

app.use('/api', randomArtist);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
