import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

const hash = (pass) => {
 return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) =>{
  if (err) throw err; // hafa varsa burada durur. save işlemini yapmaz.
    pass = hash;
 })
}

userSchema.pre("save", function(next){
  if(this.password) {
    this.password = hash(this.password);
    next();
  }
});

const Users = mongoose.model("Users", userSchema);

export default Users; 
