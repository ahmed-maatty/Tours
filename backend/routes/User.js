import express from "express";
import { deleteUser, editeUser, getAllUsers, getSingleUser } from "../controllers/usersControllers.js";
import { verifyIsAdmin, verifyUser } from "../middleWares/verifyToken.js";
import { isValidId } from "../middleWares/objectValidId.js";
const router = express.Router();

router.route("/")
        .get( verifyIsAdmin, getAllUsers)

router.route("/:id")
        .get( isValidId , verifyUser , getSingleUser)
        .put(isValidId , verifyIsAdmin ,editeUser)
        .delete(isValidId , verifyIsAdmin ,deleteUser);

export default router;