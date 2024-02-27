import express from "express";
import auth from "../middlewares/auth.js";
import {
  registerVehicle,
  findUserVehicle,
  findAllVehicle,
} from "../services/vehicleServices.js";

const vehicleRoute = express.Router();

vehicleRoute.post("/register", registerVehicle);
vehicleRoute.post("/findUserVehicle", auth, findUserVehicle);
vehicleRoute.post("/findAllVehicle", findAllVehicle);

export default vehicleRoute;
