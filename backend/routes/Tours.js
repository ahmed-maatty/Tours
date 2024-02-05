import express from "express" ;
import { createTour, deleteTour, editTour, getAllTours, getFeaturedTour, getSpecificTour, getTourBySearch, tourCount } from "../controllers/tourControllers.js";
import { verifyIsAdmin } from "../middleWares/verifyToken.js"
import { uploadImage } from "../middleWares/uploadPhoto.js";
const router = express.Router() ;


router.route('/')
        .post(verifyIsAdmin , uploadImage.single("image") , createTour)
        .get(getAllTours)

router.route("/:id")
        .get(getSpecificTour)
        .put(verifyIsAdmin , editTour)
        .delete(verifyIsAdmin , deleteTour)

router.get( '/search/getBySearch' , getTourBySearch);

router.get( '/search/getByFeatured' , getFeaturedTour );

router.get('/search/count' , tourCount);

export default router ;