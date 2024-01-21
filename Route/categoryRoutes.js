
import express from "express";

import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import { createCatoryController } from "../Controllers/createCatoryController.js";

const router = express.Router()
router.post("/create-category", requireSignIn, isAdmin, createCatoryController )


export default router;