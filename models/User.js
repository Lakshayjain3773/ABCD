import mongoose, { Schema } from "mongoose"

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        min:5,
    },
    profilePic:{
        type:String,
        default:"",
    },    
    coverPic:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true},
)

export default UserSchema;