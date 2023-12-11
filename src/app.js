//console.log("Garaj uygulamamız hayırlı olsun.");
//const express = require('express') // bu es6 gelmeden önceki versiyondur. aiğıdaki komutu kullandık.
import express from 'express';// es6 module için bu komutu kullandık.
import bodyParser from 'body-parser';
//require("dotenv").config();// es6 once bu komut yazilizordu.
import 'dotenv/config';// es6 gore 
//const usersRoutes = require("./routes/usersRoutes");//usersRoutes.js dosyası oluşturulduktan sonra bunlar eklendi
import usersRoutes from './routes/usersRoutes.js';//usersRoutes.js dosyası oluşturulduktan sonra bunlar eklendi
import mongoose from 'mongoose'; // databese bağlantısı için




const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// db Config Section
const db = process.env.MongoURI;
mongoose
  .connect(db)
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));


app.use("/users", usersRoutes);////usersRoutes.js dosyası oluşturulduktan sonra bunlar eklendi

app.listen(PORT, console.log(`Server is running at PORT:${PORT}`));