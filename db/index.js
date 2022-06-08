const { Pool } = require('pg')

const pool = new Pool({
    user:'postgres',
    password: 'chester',
    database: 'api_friend',
    host: 'localhost',
    port: 5000
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}