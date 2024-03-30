const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const pool = require('./database/connection.js')
const PORT = process.env.PORT || 5040
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
app.get('/userdata/:sql', async (req, res) => {

    console.log("PARAMS", req.params)

    try {
        const todos = await pool.query(req.params.sql)
        console.log(res.json(todos.rows))
        return res.json(todos.rows)

    } catch (error) {
        console.log("Fetching user error", error)
    }
})