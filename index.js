const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const router = require('./Routes/index.js');
const connection = require('./db/db.js') 
dotenv.config()

const PORT = process.env.PORT || 7001
const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use('/', router)

connection()


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});



