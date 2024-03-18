import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  productionYear: {
    type: Date,
    required: true,
  },
  plateNumber: {
    type: String,
    required: true,
  },
  km: {
    type: String,
    required: true,
  },
  fuelType: {
    type: Array,
    required: true,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
