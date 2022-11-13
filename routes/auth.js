import { Router } from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

const router=Router();

router.get("/register",async(req,res)=>{
    try {

        const newUser= await new User(
            {
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
            }
        );

        const salt=await bcrypt.genSalt(10);
        const hashPass=await bcrypt.hash(req.body.password,salt);

        const user=await user.save();
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
    }
})

// LOGIN
router.post("login",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user)
        {
            res.status(404).json("User not Found");
        }

        const validPass=await bcrypt.compare(req.body.password,user.password);
        if(!validPass)
        {
            res.status(400).json("Wrong Password");
        }
    } catch (error) {
        console.log(error);
    }

})

export default router;