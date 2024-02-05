import jwt from "jsonwebtoken" ;

export const verifyToken = (req , res , next) => {
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }else{
        return res.status(401).json({success : false , message : "you are not authorize"});
    }
}

export const verifyUser = (req , res , next) => {
    verifyToken(req , res , () => {
        if(req.user.id === req.params.id || req.user.role === 'user'){
            next()
        }else{
            return res.status(401).json({success : false , message : 'you are not authenticated'})
        }
    })
}

export const verifyIsAdmin = (req , res , next) => {
    verifyToken(req , res , () => {
        if(req.user.role === 'admin'){
            next()
        }else{
            return res.status(401).json({success : false , message : 'you are not authorize'})
        }
    })
}