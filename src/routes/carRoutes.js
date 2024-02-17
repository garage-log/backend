import express from "express";
import { registerCar } from "../services/carServices.js";

const carRoute = express.Router();

carRoute.post("/register", registerCar);

export default carRoute;
