import express from "express";
import {register1,register} from "../services/userServices.js";


const router = express.Router();

router.get("/", register1);

router.post("/register", register);

export default router;
