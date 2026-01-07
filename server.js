
const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");

const menuRoutes=require("./routes/menuRoutes");
const contactRoutes = require("./routes/contactRoutes");

const cors = require("cors");
const path = require("path");


dotenv.config();
const app=express();
const PORT=process.env.PORT|| 3000;
//middleware
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);

app.use("/uploads", express.static("uploads"));

connectDB();
app.listen(PORT,()=>{
     console.log(`✅ Server running on http://localhost:${PORT}`);
});

