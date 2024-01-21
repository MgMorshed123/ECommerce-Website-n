import express from "express";
import {
  
  createProductController, getProductController,

} from "../Controllers/productController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);


router.get(
  "/get-product",
  requireSignIn,
  isAdmin,
  formidable(),
  getProductController

)





export default router;