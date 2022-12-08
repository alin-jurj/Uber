const Passanger = require('../models/Passanger');
const addPassangerService = require('../services/addPassangerService');
const bcrypt = require('bcryptjs');

const postPassanger = async(req, res) => {
    const Passanger = await addPassangerService.addPassangerService(req.body);

    if(Passanger instanceof Error)
        return res.status(409).send(Passanger.message);

    try{
        const savedPassanger = await Passanger.save();
        res.status(200).json(savedPassanger);
    }catch(error){
        res.status(409).json({message:error});
    }
};

module.exports = {
    postPassanger
}