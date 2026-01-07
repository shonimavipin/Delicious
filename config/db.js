// const mongoose= require("mongoose");
// const dotenv=require("dotenv");
// dotenv.config();
// const connectDB= async()=>{
//     try{
//          const DB_CONNECTION_STRING = process.env.DATABASE_URL.replace("localhost", "127.0.0.1");
//          await mongoose.connect(DB_CONNECTION_STRING);
//          console.log("datadase connected");

//     }catch (error)
//     {
//         console.log("❌ MongoDB connection failed:", error.message);

//     }
// };
// module.exports=connectDB;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // options no longer required
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop server if DB fails
  }
};

module.exports = connectDB;
