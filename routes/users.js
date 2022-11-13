import { Router } from "express";
const router=Router();

router.get("/",(req,res)=>{
    res.send("Got home");
})

export default router;