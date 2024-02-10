
import express from "express";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, updateCategoryController } from "../Controllers/createCatoryController.js";

// import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
// import { categoryControlller, createCategoryController, deleteCategoryCOntroller, updateCategoryController  } from "../Controllers/createCatoryController.js";


const router = express.Router()

router.post("/create-category", requireSignIn, isAdmin, createCategoryController )
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController )
router.get("/get-category", requireSignIn,  categoryControlller)
router.delete("/delete-category/:id", requireSignIn,  deleteCategoryCOntroller)
// category/delete-category
export default router;