import express from 'express'
import { login,logout,signUP,testController } from '../controllers/authControllers.js'
import { isAdmin,isLoggedIn } from '../middlewares/authMiddlewares.js'
const router = express.Router()
//Routing
//signUP ||method :Post
router.post("/signup",signUP)


//Login ||method :post
router.post("/login",login)

//Logout ||method :post
router.post("/logout",logout)

//test controllers
router.get("/test",isLoggedIn,testController,isAdmin)
export default router;
