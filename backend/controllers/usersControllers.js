import User from "../models/User.js"


// Get All Users

export const getAllUsers = async ( req , res ) => {
    const {page} = parseInt(req.query);
    try {
        const allUsers = await User.find().skip( page * 8 ).limit(8) ;
        res
        .status(200)
        .json(allUsers);
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : true ,
            message : "There Is No Users To Show" 
        })
    }
}

// Get Single User 

export const getSingleUser = async ( req , res ) => {
    const {id} = req.params ;
    try {
        const specificUser = await User.findById(id);
        res
        .status(200)
        .json({ 
            success : true ,
            data : specificUser
        })
    } catch (error) {
        res
        .status(404)
        .json({ 
            success : true ,
            message : "Not Found !" 
        })
    }
}

// Edite User

export const editeUser = async ( req , res ) => {
    const {id} = req.params ;
    try {
        const editeUser = await User.findByIdAndUpdate( id , {$set : req.body} , {new : true} );
        res
        .status(200)
        .json({ 
            message : "User Updated Succcessfully",
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            success : true ,
            message : "Error , Please Try Again" 
        })
    }
}

// Delete User

export const deleteUser = async ( req , res ) => {
    const {id} = req.params ;
    try {
        await User.findByIdAndDelete( id );
        res
        .status(200)
        .json({ 
            success : true ,
            message : "User Has Been Deleted Successfully"
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            success : true ,
            message : "Error , Please Try Again" 
        })
    }
}