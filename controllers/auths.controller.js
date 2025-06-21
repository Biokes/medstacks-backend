import express from "express";
import {registerFarmer} from "../services/farmerService.js";

export const authRouter = express.Router()

authRouter.post('/farmer/register',async (res,req)=>{
    try{
        const farmerData = await registerFarmer(req.body);
        res.status(201).json({
            message:'Registration Successful',
            isSuccessful: true,
            data:farmerData
        })
    }catch (error){
        res.status(400).json({
            message:error.message,
            isSuccessful:false,
            data:'Registration Failed'
        })
    }
})

