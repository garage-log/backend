import express from "express";
import auth from "../middlewares/auth.js";
import {
  registerCar,
  findUserCar,
  findAllCar,
} from "../services/carServices.js";

const carRoute = express.Router();

carRoute.post("/register", registerCar);
carRoute.post("/findUserCar", auth, findUserCar);
carRoute.post("/findAllCar", findAllCar);

export default carRoute;
