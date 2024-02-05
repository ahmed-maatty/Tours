import Tour from "../models/Tours.js";
import path from "path" ;
import fs from "fs" ;
import {cloudinaryUpload} from "../config/cloudinaryUpload.js"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Get All Tours

export const getAllTours = async ( req , res ) => {
    const page = parseInt(req.query.page);
    try {
        const allTours = await Tour.find().populate('reviews').skip( page * 8 ).limit(8) ;
        res
        .status(200)
        .json(allTours)
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : false , 
            message : "There Is No Tour Right Now !" 
        });
    }
}

// Get Specific Tour

export const getSpecificTour = async ( req , res ) => {
    const {id} = req.params ;
    try {
        const specificTour = await Tour.findById(id).populate('reviews') ;
        res
        .status(200)
        .json(specificTour)
        
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : false , 
            message : "Not Found!" 
        });
    }
}

// Create Tour

export const createTour = async ( req , res ) => {
    const {title , city , address , distance , desc , price , maxGroupSize} = req.body ;

    try {
        if(!req.file){
            return res.status(400).json({message : "Please, Upload Photo"});
        }

        const imagePath = path.join(__dirname , `../images/${req.file.filename}`);
        const result = await cloudinaryUpload(imagePath);

        const newTour = new Tour(
            {
                title ,
                city ,
                address ,
                distance ,
                desc ,
                price ,
                photo : {
                    url : result.secure_url,
                    publicId : result.public_id
                },
                maxGroupSize
            });
        
        await newTour.save();
        res
        .status(200)
        .json({ 
            success : true , 
            message : "Tour Created " ,
            data : newTour
        });
        fs.unlinkSync(imagePath);

    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({ 
            success : false , 
            message : "Tour Has Not Been Created" 
        });
    }
}

// Edit Tour Details 

export const editTour = async ( req , res ) => {
    const {id} = req.params ;
    try {
        const tour = await Tour.findByIdAndUpdate( id , { $set : req.body } , { new : true } ) ;
        res
        .status(200)
        .json({ 
            success : true , 
            message : " Updated Successfully " ,
            data : tour
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            success : false , 
            message : "There Is An Error, Please Try Again" 
        });
    }
}

// Delete A Tour

export const deleteTour = async ( req , res ) => {
    const {id} = req.params ;
    try {
        await Tour.findByIdAndDelete(id) ;
        res
        .status(200)
        .json({ 
            success : true , 
            message : " This Tour Deleted "
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            success : false , 
            message : "There Is An Error, Please Try Again" 
        });
    }
}

//Search For Tour 

export const getTourBySearch = async ( req , res ) => {
    const city = new RegExp( req.query.city , 'i') ;
    const distance = parseInt(req.query.distance) ;
    const maxGroupSize = parseInt(req.query.maxGroupSize) ;
    try {
        const searchResult = await Tour.find(
            {
                city,
                distance : {$gte : distance},
                maxGroupSize :  {$gte : maxGroupSize}
            }
        ).populate('reviews')
        res
        .status(200)
        .json(searchResult)
        
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : false , 
            message : "Not Found!" 
        });
    }
}

// get featured tour

export const getFeaturedTour = async (req , res) => {
    const page = parseInt(req.query.page);
    try {
        const featuredTours = await Tour.find({ featured : true })
            .skip( page * 8 ).limit(8).populate('reviews');
        res
        .status(200)
        .json({ 
            success : true ,
            data : featuredTours
        })
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : false , 
            message : "Not Found!" 
        });
    }
}

// Tour Count 

export const tourCount = async (req,res)=>{
    const count = await Tour.count();
    try {
        res
        .status(200)
        .json(count)
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : false , 
            message : "Not Found!" 
        });
    }
}