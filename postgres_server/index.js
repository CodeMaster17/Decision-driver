const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const pool = require('./database/connection.js')
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
app.get('/userdata', async (req, res) => {

    try {
        const todos = await pool.query('SELECT * from userdata;')
        console.log(todos.rows)
        res.status(201).send(todos.rows)

    } catch (error) {
        console.log("Fetching user error", error)
    }
})
