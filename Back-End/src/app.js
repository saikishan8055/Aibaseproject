// const express = require('express')
// const aiRoutes = require('./routes/ai.routes')


// const app=express()
//  app.get('/',(res,req)=>{
//     req.send("hello world")
//  })
// app.get('/ai',aiRoutes)

// module.exports=app
import express from "express";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(express.json());
app.use("/api", aiRoutes);

export default app;

