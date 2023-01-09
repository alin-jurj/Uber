const request = require('../models/Request')
const car = require('../models/Car')
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
    const driverUsername = req.query.username;
    try
    {
        await request.updateOne({id: id}, {$set: {driverUsername: driverUsername}})
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

const deleteRequest = async(req,res) =>{
    try {
        
        await request.deleteOne({passengerUsername:req.query.id})
        res.send('ok');
      
    } catch (error) {
      res.status(404).json({ message: error });
   
    }
    
};

 const getRequestWithCar = async(req, res) => {
    try{

        const resultedRequest = await request.findOne({passengerUsername:req.query.username});
        const resultedCar = await car.findOne({username:resultedRequest.driverUsername});
        if(resultedCar == null) throw new Error();
        res.status(200).json(resultedCar);
        
    }catch (error) {
        res.status(404).json({ message: error });
    }
   
};
module.exports = {
    addRequest,
    updateRequest,
    getRequest,
    deleteRequest,
    getRequestWithCar
}