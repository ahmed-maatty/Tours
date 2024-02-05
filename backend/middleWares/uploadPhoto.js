import path from "path";
import { fileURLToPath } from 'url';
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const diskStorage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , path.join(__dirname, "../images"));
    },
    filename : function(req , file ,cb){
        if(file){
            cb(null, new Date().toISOString().replace(/:/g , "-" ) + file.originalname );
        }else{
            cb(null , false);
        }
    }
});

export const uploadImage = multer({
    storage : diskStorage,
    fileFilter : function(req ,file ,cb){
        if(file.mimetype.startsWith("image")){
            cb(null , true);
        }else{
            cb({message :"unsupported file foramte"} , false);
        }
    },
    limits : { fileSize : 1024 * 1024 * 5}
});

