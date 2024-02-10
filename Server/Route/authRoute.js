
import express from 'express';
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../Controllers/authController.js';
import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware.js';
// import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../Controllers/authController.js';
// import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware.js';


const router =   express.Router()

router.post("/register", registerController)
router.post("/login", loginController)
router.post("/forgot-PassWord", forgotPasswordController)
// TEST ROUTE 
router.post("/test", requireSignIn, isAdmin,  testController)
// protected route
router.get("/user-auth", requireSignIn, (req,res) => {
    res.status(200).send({ok : true})
})
router.get("/admin-auth", requireSignIn, isAdmin,(req,res) => {
    res.status(200).send({ok : true})   
})


//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;


