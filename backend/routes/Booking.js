import express from "express" ;
import { craeteBooking, getAllBooking } from "../controllers/bookingController.js";
import { verifyIsAdmin, verifyToken } from "../middleWares/verifyToken.js";
const router = express.Router();

router.route("/")
            .post( verifyToken , craeteBooking)
            .get(verifyIsAdmin , getAllBooking);


export default router ;
