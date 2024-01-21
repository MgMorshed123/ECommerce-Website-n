import express from "express";
import {
  
  createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController,

} from "../Controllers/productController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//create-product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get pRODUCTS
router.get(
  "/get-product",
  requireSignIn,
  isAdmin,
  formidable(),
  getProductController

)
// get SingleProducts
router.get(
  "/get-SingleProduct",
  requireSignIn,
  isAdmin,
  formidable(),
  getSingleProductController
)

// get Photo


router.get('/product-photo/:pid', productPhotoController)




// delete Products
router.get('/product', deleteProductController)




export default router;