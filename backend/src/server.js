//import express = require("express");  //both are same 
import express from 'express';  //If we write this & we get worning then add type:model in package.json 
import notesRoutes from './routes/notesRoutes.js'; 
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json());

app.use("/api/notes", notesRoutes); 
 
app.listen(PORT, () => {
    console.log("Server started on Port:",PORT);
});
