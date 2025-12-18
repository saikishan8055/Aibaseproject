// const express = require('express')
// const aiController = require("../controller/ai.controller")
// const router = express.Router();

// router.get("/get-response",aiController,aiController.getResponse)

// module.exports=router;
import express from "express";
import { getResponse } from "../controller/ai.controller.js";

const router = express.Router();

router.get("/ai", getResponse); // ✅ pass function reference

export default router;
