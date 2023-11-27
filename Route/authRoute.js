
import express from 'express';
import { loginController, registerController, testController } from '../Controllers/authController.js';
import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware.js';
const router =   express.Router()




router.post("/register", registerController)
router.post("/login", loginController)

// TEST ROUTE 
router.post("/test", requireSignIn, isAdmin,  testController)


export default router;


