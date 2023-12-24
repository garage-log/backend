import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import hash from "../utils/hash.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  roles: {
    type: Array,
    default: ["user"],
  },
  isDeleteAccount: {
    type: Boolean,
    default: false
  },
});
/*
const hash = (pass) => {
  const hashed = bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) => {
    if (err) throw err;
    pass = hash;
  });
  return hashed;
};
*/

//Password hashing
userSchema.pre("save", function(next){
  if(this.password) {
    this.password = hash(this.password);
    next();
  }
});
//Password validate
userSchema.methods.validatePassword = function ( pass) { 
  return bcrypt.compare(pass, this.password);
}

const Users = mongoose.model("Users", userSchema);

export default Users; 
