import Users from "../models/Users.js";

const getIstegi = (req, res) => {
    res.send("get isteği geldi");
  };

const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await Users.findOne({ username }).exec();
  if (!data) {
    return res.status(404).json({message: "User cannot be found"});
  };
  
  console.log(data.password) /// Burayı hashe ile kontrol edilecek.
  if(!(data.password === password)) {
    return res.status(403).json({ message: " The password is incorrect"})
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

const find = async(req, res) =>{
  const id = req.params.id;
  try {
      const data = await Users.findOne({_id: id}).exec();
      
      res.json({
          user: {
              id: data._id,
              username:data.username,
              email:data.email,
          }
      })

  } catch (error) {
      res.status(403).json({message:" User could not found."});
  }
};

const allUsers = async(req, res) =>{
    
  try {
      const data = await Users.find().exec();
      const user = data.map((item) => {
          return {
              id: item._id,
              username:item.username,
              email:item.email,
          }
      })

      res.json({user});

  } catch (error) {
      res.status(403).json({message:" User could not found."});
  }
};

  export {getIstegi, login, register, find, allUsers};
