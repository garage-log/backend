import Vehicle from "../models/Vehicle.js";

const registerVehicle = async (req, res) => {
  try {
    const vehicle = req.body;
    vehicle.productionYear = new Date(vehicle.productionYear);
    const data = await Vehicle.create(vehicle);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Vehicle could not created." });
  }
};

const findUserVehicle = async (req, res) => {
  try {
    const userVehicle = req.body;

    console.log(userVehicle);
    const data = await Vehicle.find({ userId: userVehicle.userId }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "User's vehicle could not find." });
  }
};

const findAllVehicle = async (req, res) => {
  try {
    const data = await Vehicle.find().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Vehicle could not find." });
  }
};

const findUserVehicles = async (userId) => {
  try {
    const data = await Vehicle.find({ userId: userId }).exec();
    return data.map((vehicle) => {
      return vehicle._id;
    });
  } catch (error) {
    res.status(400).json({ message: "User's vehicle could not find." });
  }
};

export { registerVehicle, findUserVehicle, findAllVehicle, findUserVehicles };
