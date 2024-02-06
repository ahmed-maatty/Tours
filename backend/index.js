import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import Tours from "./routes/Tours.js"
import Users from "./routes/User.js";
import Auth from "./routes/Auth.js";
import Review from "./routes/Reviews.js";
import Booking from "./routes/Booking.js"

// app

const app = express();

// env Config

dotenv.config();


// Data Base Connection 

const DBConnection = async ()=>{
    try {
        mongoose.connect(process.env.DB_URI).then(console.log('DataBase Connected >_<'));
    } catch (error) {
        console.log(err)
    }
}

// MiddleWares

app.use(express.json());
app.use(cors({
    origin: "https://tours-e53e.onrender.com",
    credentials:true
}));
app.use(cookieParser());

// Routes

app.use('/tours' , Tours);
app.use('/users' , Users);
app.use('/auth' , Auth);
app.use('/reviews' , Review);
app.use('/booking' , Booking);

app.use((req,res,next)=>{
    const error = new Error("Not Found!");
    error.status = 404;
    next(error);
})

app.use((error , req ,res ,next) => {
    res.status = error.status || 500 ;
    res.json(
        {
            error : error.message
        }
    )
})
// Server

app.listen(process.env.PORT, () => {
    DBConnection();
    console.log('Server running');
});
