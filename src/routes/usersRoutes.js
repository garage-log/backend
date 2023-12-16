import express from "express";
import Users from "../models/Users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get isteği geldi");
});

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    const data = await Users.create(user);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "User could not created." });
  }
});

export default router;
