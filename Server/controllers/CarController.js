const car = require('../models/Car')
const addCar = async(req, res) => {
    const {pictureUrl, category, price, name, username} = req.body;
    try
    {

         await car.create({
            pictureUrl,
            category,
            price,
            name,
            username
        })
        res.send({status:"ok"});
    }catch(error){
        
        res.send({status:"error"});
        console.log(error);
    }

}
const getCar = async(req, res) => {
    // try{
    //     const car = await car.findById(req.params.id);
    //     if (!car)
    //         throw new Error;
    //     res.status(200).json(car);
    // } catch (error) {
    //     res.status(404).json({message: error});
    // }
    const cars = await car.find()

    res.status(200).json(cars);
};
module.exports = {
    addCar,
    getCar

}