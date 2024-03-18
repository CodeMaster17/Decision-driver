require('dotenv').config()
const pg = require('pg')
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
})

pool.connect((err) => {
    if (err) {
        console.log("error connecting to postgres", err)
        throw err
    }
    console.log("connected to postgres successfully")
})

module.exports = pool;