import express from "express";
import formidable from "express-formidable";
import {
  
  brainTreePaymentController,
  braintreeTokenController,
  createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController,

} from "../Controllers/productController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

import {  updateProfileController } from "../Controllers/authController.js";

const router = express.Router();

//create-  product/create-product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// some


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

//product per page
router.get("/product-list/:page", productListController);


//search product
router.get("/search/:keyword", searchProductController);


//similar product
router.get("/related-product/:pid/:cid", realtedProductController);


//category wise product
router.get("/product-category/:slug", productCategoryController);



//update profile
router.put("/profile", requireSignIn, updateProfileController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


export default router;