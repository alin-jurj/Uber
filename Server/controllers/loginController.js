const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async(req, res) => {
    
    const { username, password} = req.body;

    var user = await user.findOne({username:username});

    if(!user)
        return res.status(400).send('Username is wrong.');

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword)
        return res.status(400).send('password is wrong');
    
    if (user instanceof Passanger)
        role  = 'Passanger'

    const token = jwt.sign({_id: user._id, role: role}, process.env.TOKEN_SECRET)

    try{
        res.header('auth-token',token).status(200).send(token);
    }catch(error){
        res.status(400).json({message: error});
    }
};

module.exports = loginUser;