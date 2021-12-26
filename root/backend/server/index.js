const express = require('express');
// const cookieSession = require('cookie-session');
// const path = require('path');
const randomArtists = require('./api/randomArtists');
const searchByName = require('./api/searchByName');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

// app.use(
//   cookieSession({
//     name: 'session',
//     keys: ['key1'],

//     // Cookie Options
//     sameSite: 'none',
//     secure: true,
//   })
// );
// app.use(express.static(path.join(__dirname, '../../', 'frontend/build')));

app.use('/api', randomArtists);
app.use('/api', searchByName);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../', 'frontend/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
