import mongoose from "mongoose";

const roleUserSchema = new mongoose.Schema({
  role: {
    type: String,
    require: true,
  },
  title: String,
  require: true,
});

const RoleUser = mongoose.model("RoleUser", roleUserSchema);

export default RoleUser;
