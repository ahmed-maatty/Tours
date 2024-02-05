import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "Tour",
        },
        userEmail: {
            type: String,
        },
        tourName : {
            type: String,
            required: true,
        },
        fullname :{
            type: String,
            required: true,
        },
        phone : {
            type :Number ,
            required: true,
        },
        guestSize : {
            type :Number ,
            required: true,
        },
        bookAt : {
            type :Date ,
        }
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking ;