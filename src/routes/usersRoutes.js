import express from "express";
import { getIstegi, login, register, find, allUsers } from "../services/usersServices.js";

const router = express.Router();

//router.get("/", getIstegi);
router.post("/login", login);
router.post("/register", register);
router.get("/:id", find);
router.post("/hepsi", allUsers);

//burada get isteği  ( / ) iken çalısıyor. Ama /hepsi durumda ike .alışmıyor bunu nedeni nedir.
//router.get("/hepsi", allUsers);

export default router;
