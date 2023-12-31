import express from "express";
import bodyParser from "body-parser";
import "dotenv/config"; 
import usersRoutes from "./routes/usersRoutes.js"; 
import mongoose from "mongoose";

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = process.env.MongoURI;
mongoose
  .connect(db)
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));

app.use("/users", usersRoutes);

app.listen(PORT, console.log(`Server is running at PORT:${PORT}`));
