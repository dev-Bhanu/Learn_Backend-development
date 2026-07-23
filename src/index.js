// require("dotenv").config({path:".env"});
import dotenv from "dotenv";
import connectDb from "./db/index.js";


 dotenv.config({
    path:"./env"
 })

connectDb();
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    }
    app.on("error",(error)=>{
        console.log("Error connecting to MongoDB",error);
        throw error
    })
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})











// import express from "express";
// const app = express();

// const connectDb = async () => {
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//    app.on("error",()=>{
//     console.log("Error connecting to MongoDB");
//    })
//    app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
//    });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// };
