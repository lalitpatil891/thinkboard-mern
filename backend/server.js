//import express = require("express");  //both are same 
import express from 'express';  //If we write this & we get worning then add type:model in package.json 

const app = express(); 
 
    app.get("/api/notes" ,(req,res) => {
        res.send("You got 5 notes");
    });

app.listen(5001, () => {
    console.log("Server started on Port: 5001");
});