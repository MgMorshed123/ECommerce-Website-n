import express from "express";
import {
  
  createProductController,

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




export default router;