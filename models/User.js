const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
// create a new folder in mongoDB named as inotebook and in that folder our data will saved.
const User= mongoose.model('user',UserSchema);

module.exports=User;