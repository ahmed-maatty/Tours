import mongoose from "mongoose";

export const isValidId = (req,res,next)=>{
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
        next();
    }else {
        return res.status(400).json({success : false , message : "Invalid Id"})
    }
}