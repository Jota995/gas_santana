const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const MONGOOSE_SETTINGS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

async function connectToDatabase(){
    try{
        await mongoose.connect(MONGO_URI,MONGOOSE_SETTINGS);
        console.log('DATABASE is connected');
    }catch(err){
        console.log(err);
    }   

}

module.exports = connectToDatabase();