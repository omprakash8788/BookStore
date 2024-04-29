import express from 'express'
import { login, signup } from '../controller/user.controller.js'

const router=express.Router()

// now defined your router
router.post("/signup", signup)
router.post("/login", login)



export default router