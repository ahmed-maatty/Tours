import Review from "../models/Reviews.js"
import Tour from "../models/Tours.js"


export const craeteReview = async (req,res)=>{
    const {id} = req.params ;
    const newReview = new Review({
        productId : req.user.id,
        username: req.user.username,
        reviewText : req.body.reviewText,
        rating : req.body.rating
    });
    try {
        await newReview.save();
        await Tour.findByIdAndUpdate(id,{
            $push : {reviews : newReview._id}
        });
        res.status(200).json({
            success : true ,
            review : newReview,
            message : "review Submitted"
        })
    } catch (error) {
        res.status(500).json({success : false , message : "failed to add review"})
    }
}