const cors = require('cors')
const express = require('express')
const app = express()
const ruleController = require('./controller/rule_action'); // Adjust the path according to your project structure
require('./database/connection');
// POST request to create a rule
const PORT = process.env.PORT || 5002
app.use(cors())
app.use(express.json())
app.use(express.json());


app.post('/rules/create', ruleController.createRule);

app.get('/rules/create', async (req, res) => {
    return res.send({ "status": "status ok at this port" })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});