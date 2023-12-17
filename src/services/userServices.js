import Users from "../models/Users.js";

const register1 = (req, res) => {
    res.send("get isteği geldi");
  }

const register = async (req, res) => {
    const user = req.body;
    try {
      const data = await Users.create(user);
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: "User could not created." });
    }
  }

  export {register1, register};
