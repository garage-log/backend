//const mongoose = require('mongoose');
import mongoose from "mongoose"; 

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
  });

  const Users = mongoose.model("Users", userSchema);
  
  //module.exports = Users; // ES6 ÖNCE
  export default Users; // ES6 SONRA // Burası user.js kullanmak için dışarıya servis etmiş olduk.
  