const express = require('express');
const connectDB = require('./config/db');
const logger =require('morgan');
var cors = require('cors');
const router= require('./routes/api/players')

const app = express();

app.use(express.json({ extended: false }));
app.use(logger('dev'));
// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(router);


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));