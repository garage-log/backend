import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  productionYear: {
    type: Date(),
    required: true,
  },
  plateNuber: {
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

const Cars = mongoose.model("Cars", carSchema);
export default Cars;
