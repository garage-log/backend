import express from "express";
import { register1,register, find } from "../services/userServices.js";


const router = express.Router();

router.get("/", register1);

router.post("/register", register);

router.post("/:id", find);

export default router;
