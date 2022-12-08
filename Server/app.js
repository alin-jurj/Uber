
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app=express()


mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));



app.post("/register",async(req,res) => {
    const { username, email, password} = req.body;

    const encryptedPassword = await bcrypy.hash(password,10)

    try{
        const oldUser = User.findOne({username});

        if(oldUser){
            res.send({error:"User Exists"});
        }
        await passanger.create({
            username,
            email,
            password: encryptedPassword,
            token
        });
        res.send({status: "ok"});
    }catch(error){
        res.send({status:"error"});
    }
});