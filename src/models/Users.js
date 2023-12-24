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
  const hashed = bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) => {
      if (err) throw err;
      pass = hash;
  })
  return hashed;
}

//password hashing kısmını
// save kısmı çalışmadan once ilk burası çalısacak pasword şifreleyecek ve daha sonra kaydedecek.
userSchema.pre("save", function(next){
  if(this.password) {
    this.password = hash(this.password);
    next();
  }
});

// password validate kısmı
userSchema.methods.validatePassword = function ( pass) {//method ismi validatePassword not buraya istediğimiz ismi verebiliriz. 
  return bcrypt.compare(pass, this.password);//true veya false değer döndürür.
}




const Users = mongoose.model("Users", userSchema);

export default Users; 
