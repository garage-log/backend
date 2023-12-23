import express from "express";
import { 
        login, 
        register, 
        find, 
        allUsers, 
        update,
        remove,
    } from "../services/usersServices.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/:id", find);
router.post("/allUsers", allUsers);
router.patch("/", update);
router.delete("/:id", remove);

//burada get isteği  ( / ) iken çalısıyor. Ama /hepsi durumda ike .alışmıyor bunu nedeni nedir.
//router.get("/hepsi", allUsers);

export default router;
