const express = require('express');
require('dotenv').config()
require('./models/db');
const app=express()


app.get('/', (req, res) => {
    res.send("Hello World");
})
app.listen(8000, () => {
    console.log('port is listening');
})