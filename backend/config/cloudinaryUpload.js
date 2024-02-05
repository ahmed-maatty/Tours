import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config()



cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: '746959287217589',
    api_secret: 'F8M8EBhpiHPthQBxFWWgJKtIwJQ'
});

export const cloudinaryUpload = async (fileUpload) => {
    try {
        const data = await cloudinary.uploader.upload(fileUpload , {
            resource_type :"auto"
        });
        return data ;
    } catch (error) {
        return error ;
    }
};

export const cloudinaryRemove = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result ;
    } catch (error) {
        return error;
    }
}