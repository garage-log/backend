import Vehicles from "../models/Vehicles.js";

const registerCar = async (req, res) => {
  try {
    const car = req.body;
    car.productionYear = new Date(car.productionYear);
    const data = await Vehicles.create(car);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Car could not created." });
  }
};

const findUserCar = async (req, res) => {
  try {
    const userCar = req.body;
    const data = await Vehicles.findOne({ userId: userCar.userId }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "User's car could not find." });
  }
};

const findAllCar = async (req, res) => {
  try {
    const data = await Vehicles.find().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Vehicles could not find." });
  }
};

export { registerCar, findUserCar, findAllCar };
