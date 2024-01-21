
import express from "express";

import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import { createCategoryController, updateCategoryController,  } from "../Controllers/createCatoryController.js";

const router = express.Router()
router.post("/create-category", requireSignIn, isAdmin, createCategoryController )


router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController )



export default router;