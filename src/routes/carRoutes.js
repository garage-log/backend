import express from "express";
import { registerCar } from "../services/carServices.js";

const carRoute = express.Router();

carRoute.get("/", registerCar);

export default carRoute;
