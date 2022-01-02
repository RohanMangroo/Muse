const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'rohan',
  password: 'Mastodon0d',
  database: 'musedb',
  host: 'ec2-3-227-154-49.compute-1.amazonaws.com',
  port: '5432',
});

module.exports = pool;
