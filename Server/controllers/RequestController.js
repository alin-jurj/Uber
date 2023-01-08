const request = require('../models/Request')
const addRequest = async(req, res) => {
    const {passengerPicture, passengerUsername, requestCategory, distance} = req.body;
    try
    {

         await request.create({
            passengerPicture,
            passengerUsername,
            requestCategory,
            distance
        })
        res.send({status:"ok"});
    }catch(error){
        
        res.send({status:"error"});
        console.log(error);
    }

}

// const updateRequestDistance = async(req, res) => {
//     const username = req.query.username;
//     const distance = req.query.distance;
//     try
//     {
//         request.updateOne({passengerUsername: username}, {$set: {distance: distance}})
//         res.send({status:"ok"});
//     }catch(error){
        
//         res.send({status:"error"});
//         console.log(error);
//     }
// }

const updateRequest = async(req, res) => {
    const id = req.query.id;
    const {driverUsername} = req.body;
    try
    {
        request.updateOne({id: id}, {$set: {driverUsername: driverUsername}})
        res.send({status:"ok"});
    }catch(error){
        
        res.send({status:"error"});
        console.log(error);
    }
}

const getRequest = async(req, res) => {
    const resultedRequest = await request.find();

    res.status(200).json(resultedRequest);
};
module.exports = {
    addRequest,
    updateRequest,
    getRequest
}