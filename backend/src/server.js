//import express = require("express");  //both are same 
import express from 'express';  //If we write this & we get worning then add type:model in package.json 
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from "./config/db.js";
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}
//middleware
app.use(express.json()); // This middleware will parse JSON bodies: req.body
app.use(rateLimiter);



// our simple custom middleware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} $ Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

// connect to database
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on Port:", PORT);
    });
});