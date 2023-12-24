import express from "express";
import { 
        login, 
        register, 
        find, 
        allUsers, 
        update,
        remove,
    } from "../services/usersServices.js";
//import auth from "../middlewares/auth.js";

// middleware
const auth = (req, res, next) => {
    const loggedInUsed = false;
    if (!loggedInUsed) {
        return res.status(403).json({ message: "Unauthorized user..."});
    }
    //eger yularıdaki işlemler başarılı ise next() ile devam edecek. Yani ara katman
    // bu ara takmanda işlemler başarılı ise ve next() gördüyse işlemlere devam et anlamındadır.
    next();
};

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/:id", find);
router.post("/allUsers", auth, allUsers);
router.patch("/", update);
router.delete("/:id", remove);

//burada get isteği  ( / ) iken çalısıyor. Ama /hepsi durumda ike .alışmıyor bunu nedeni nedir.
//router.get("/hepsi", allUsers);

export default router;
