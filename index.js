import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import useRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

const app=express();
const Port=process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL,{useNewUrlPareser:"True"},()=>{
    console.log("Database Conneted");
});

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",useRouter);
app.use("/api/auth",authRouter);

dotenv.config();

app.listen(Port,()=>{
    console.log("Server Running");
}) 