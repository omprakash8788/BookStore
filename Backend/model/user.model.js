// define user schema

import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    }

})
// here we are converting Schema into model
const User=mongoose.model("User",userSchema)

export default User

