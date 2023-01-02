
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app=express()


mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

app.use(express.json())
const userRoutes = require('./routes/userRoutes')
const CarRoutes = require('./routes/CarRoutes')

app.use('/user',userRoutes);
app.use('/car',CarRoutes)

