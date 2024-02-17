import Cars from "../models/Cars.js";

const registerCar = async (req, res) => {
  try {
    const car = req.body;
    car.productionYear = new Date(car.productionYear);
    const data = await Cars.create(car);
    res.json(data);
  } catch (error) {
    res.status(400).json(error);
    // res.status(400).json({ message: "Car could not created." });
  }
};

export { registerCar };
