import mongoose from "mongoose";

const vehiclesSchema = new mongoose.Schema({
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
  feulType: {
    type: Array,
    required: true,
  },
});

const Cars = mongoose.model("Vehicles", vehiclesSchema);
export default Cars;
