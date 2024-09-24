const mongoose = require('mongoose');
const connectToMongo = async ()=>{
    try{
    mongoose.set('strictQuery',false)
    await mongoose.connect("mongodb://localhost:27017/inotebook")
    console.log('Mongo connected')
    }catch(error){
    console.log(error)
    process.exit()
    }
    }
    module.exports = connectToMongo;