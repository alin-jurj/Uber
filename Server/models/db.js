const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log('our db is connected')
}).catch(err => console.log(err))