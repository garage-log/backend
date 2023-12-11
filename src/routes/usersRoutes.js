//const express = require("express");//es6 onceki kod.
import express from "express";//es6 ile gelen kod.
import Users from "../models/Users.js";




const router = express.Router();

router.get("/", (req, res) =>{
    res.send("get isteği geldi");
});

router.post('/register', async (req, res) => {
    const user = req.body;
    try {
        const data = await Users.create(user);//burası kaydeder. Sonra bir cevap dondu o donen cevabı data eşitledik.
        res.json(data)  // kullanıcıya geri gönderdik.
    } catch (error) {
        res.status(400).json({message: "User could not created."})
    }
    

});


//module.exports=router  //const express kullandığı komut

export default router;