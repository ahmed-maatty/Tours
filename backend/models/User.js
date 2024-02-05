import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: Object,
        default:{
            url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            publicId:null
        }
    },
    role: {
        type: String,
        enum:["user" , "admin"],
        default: "user",
    },
},
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User ;