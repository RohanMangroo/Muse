const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'rohan',
  password: 'Mastodon0d',
  database: 'musedb',
  host: 'localhost',
  port: '5432',
});

module.exports = pool;
