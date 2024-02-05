import express from "express" ;
import { craeteReview } from "../controllers/reviewsController.js";
import { isValidId } from "../middleWares/objectValidId.js";
import { verifyUser } from "../middleWares/verifyToken.js"
const router = express.Router() ;

router.route("/:id")
            .post( isValidId, verifyUser , craeteReview);


export default router ;