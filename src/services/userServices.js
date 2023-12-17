import Users from "../models/Users.js";

const register1 = (req, res) => {
    res.send("get isteği geldi");
  };

const register = async (req, res) => {
    const user = req.body;
    try {
      const data = await Users.create(user);
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: "User could not created." });
    }
  };

const find = async (req,res) => {
    const id = req.params.id;
    try {
        const data = await Users.findOne({_id:id}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: "User cannot be found."});
    }
}




  export {register1, register, find};
