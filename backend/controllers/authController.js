import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req , res) => {
    const { email , password , fname , lname } = req.body ;
    try {

        // Hashed Password
        const salt = bcrypt.genSaltSync(10);
        const hashedPass = bcrypt.hashSync(password , salt);

        //validate the user account
        if( await User.findOne({email}) ){
            return res.status(500)
            .json({
                success:false,
                message : "This Email Already Exist !"
            })
        };

        //create new User
        const user = new User({
            fname,
            lname,
            username : `${fname} ${lname}`,
            email,
            password : hashedPass,
        });

        await user.save();

        res.status(200).json({
            success : true ,
            message : "Account Created, Login Now !"
        });

    } catch (error) {
        res.status(500).json({success : false , message : "Failed Register , Try Again Later"})
    }
};

export const login = async (req , res) => {
    const user = await User.findOne({email : req.body.email});
    try {
        if(!user) {
            return res.status(401).json({success : false , message : "invalid email or password"})
        }
        const isPassMatch = bcrypt.compareSync(req.body.password , user.password);
        if(!isPassMatch){
            return res.status(401).json({success : false , message : "invalid email or password"})
        }
        const {password , role  , ...rest} = user._doc ;
        const token = jwt.sign({id : user._id , role : user.role , username : user.username} , process.env.JWT_SECRET_KEY , {expiresIn : '15d'}) ;
        res.cookie( 'accessToken' , token , {
            httpOnly: true,
            expires : token.expireIn
        }).status(200).json({
            token,
            role,
            data : {...rest}
        })
    } catch (error) {
        res.status(500).json({success : false , message : "Failed Login , Try Again Later"})
    }
}