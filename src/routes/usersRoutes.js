import express from "express";
import { getIstegi, login, register, find } from "../services/usersServices.js";

const router = express.Router();

router.get("/", getIstegi);
router.post("/login", login);
router.post("/register", register);
router.post("/register", register);
router.post("/:id", find);

export default router;
