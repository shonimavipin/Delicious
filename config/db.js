const mongoose= require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const connectDB= async()=>{
    try{
         const DB_CONNECTION_STRING = process.env.DATABASE_URL.replace("localhost", "127.0.0.1");
         await mongoose.connect(DB_CONNECTION_STRING);
         console.log("datadase connected");

    }catch (error)
    {
        console.log("❌ MongoDB connection failed:", error.message);

    }
};
module.exports=connectDB;
