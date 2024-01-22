import express from "express";
import {
  
  createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFiltersController, productPhotoController, updateProductController,

} from "../Controllers/productController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//create-  product/create-product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);



//update-product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
updateProductController
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
router.get("/get-product/:slug", getSingleProductController);

// get Photo
router.get('/product-photo/:pid', productPhotoController)

// delete Products
router.delete('/delete-product/:pid', deleteProductController)

//filter product
router.post("/product-filters", productFiltersController);


//product count
router.get("/product-count", productCountController);



export default router;