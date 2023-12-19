import Users from "../models/Users.js";

const getIstegi = (req, res) => {
    res.send("get isteği geldi");
  };

const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await Users.findOne({ username }).exec();
  if (!data) {
    return res.status(404).json({message: "User cannot be found"});
  }
  res.status(200).json(data);
}

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

  export {getIstegi, login, register, find};
