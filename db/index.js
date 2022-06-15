// const { Pool } = require('pg')

// const pool = new Pool({
//     user:'postgres',
//     password: 'chester',
//     database: 'api_friend',
//     host: 'localhost',
//     port: 5000
// })

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// }

const Pool = require("pg").Pool;
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
});

module.exports = {pool}