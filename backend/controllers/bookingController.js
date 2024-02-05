import Booking from "../models/Booking.js";

export const craeteBooking = async (req ,res) => {
    const {
        userEmail ,
        tourName ,
        fullname ,
        phone ,
        guestSize ,
        bookAt
    } = req.body;
    const newBook = new Booking({
        userId : req.user.id,
        userEmail,
        tourName,
        fullname,
        phone,
        guestSize,
        bookAt
    });
    try {
        const savedBook = await newBook.save();
        res.status(200).json({ success : true , message : "your tour is booked" , data : savedBook})
    } catch (error) {
        res.status(500).json({ success : false , message : "there is an error , try again !" })
        console.log(error)
    }
}


//Get All Booking
export const getAllBooking = async (req,res) => {
    try {
        const allBooking = await Booking.find();
        res.status(200).json(allBooking)
    } catch (error) {
        res.status(500).json({ success : false , message : "there is an error , try again !" })
    }
}
