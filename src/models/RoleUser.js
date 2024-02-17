import mongoose from "mongoose";

const roleUserSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const RoleUser = mongoose.model("RoleUser", roleUserSchema);

export default RoleUser;
