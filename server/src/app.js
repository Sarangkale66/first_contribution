const express = require("express");
const app= express();

app.get("/health",(req,res)=>{
  res.json({
    message:"healthy",
    success: true
  })
})

module.exports = app;