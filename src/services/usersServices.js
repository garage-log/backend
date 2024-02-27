import Users from "../models/Users.js";
import jwt from "jsonwebtoken";
import { findUserRoles } from "./roleUserServices.js";
import { findUserVehicles } from "./vehicleServices.js";

const register = async (req, res) => {
  const user = req.body;
  try {
    const data = await Users.create(user);
    res.status(200).json(data);
  } catch (error) {
    if (error.keyValue.username) {
      res.status(400).json({ message: "Existing username error." });
      return;
    }

    if (error.keyValue.email) {
      res.status(400).json({ message: "Existing email address error." });
      return;
    }

    res.status(400).json({ message: "User cannot created." });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await Users.findOne({ username }).exec();
  if (!data) {
    return res.status(404).json({ message: "User cannot be found" });
  }

  const isValidated = await data.validatePassword(password);
  if (!isValidated) {
    return res.status(403).json({ message: " The password is incorrect" });
  }

  const roleNames = await findUserRoles(data.roles);

  const userVehicles = await findUserVehicles(data._id);

  const user = {
    id: data._id,
    username: data.username,
    email: data.email,
    roles: roleNames,
    userVehicles,
  };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json({
    user: {
      token: accessToken,
      ...user,
    },
  });
};

const find = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Users.findOne({ _id: id }).exec();

    res.json({
      user: {
        id: data._id,
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  } catch (error) {
    res.status(403).json({ message: " User could not found." });
  }
};

const allUsers = async (req, res) => {
  try {
    const data = await Users.find().exec();
    const user = data.map((item) => {
      return {
        id: item._id,
        username: item.username,
        email: item.email,
        password: item.password,
      };
    });

    res.json({ user });
  } catch (error) {
    res.status(403).json({ message: " User could not found." });
  }
};

const update = async (req, res) => {
  console.log(req.body);
  const user = req.body;
  try {
    const data = await Users.updateOne({ _id: user.id }, { $set: user }).exec();

    res.json(data);
  } catch (error) {
    res.status(403).json({ message: " User could not update." });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Users.deleteOne({ _id: id }).exec();

    res.json(data);
  } catch (error) {
    res.status(403).json({ message: " User could not delete." });
  }
};

export { login, register, find, allUsers, update, remove };
