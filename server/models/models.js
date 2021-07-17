const { Pool } = require('pg');

// link to database
const PG_URI ='postgres://gruvpirc:vcr1NdRYverCbg1s70MgQ0UX-oeDBURL@batyr.db.elephantsql.com/gruvpirc';

// database connection
const pool = new Pool({
  connectionString: PG_URI,
});

// export standard query format
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
