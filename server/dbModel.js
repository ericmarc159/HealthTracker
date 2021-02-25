const {Pool} = require('pg');

const URI =
  '	postgres://lsrajuwg:KC-N8a...@ruby.db.elephantsql.com:5432/lsrajuwg';
const pool = new Pool({connectionString: URI});

module.exports = pool;