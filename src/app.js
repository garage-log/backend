import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import usersRoutes from "./routes/usersRoutes.js";
import roleUserRoutes from "./routes/roleUserRoutes.js";
import mongoose from "mongoose";
//import cors from 'cors';

/*var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
*/

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(cors(corsOptions));

const db = process.env.MongoURI;
mongoose
  .connect(db)
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));

app.use("/users", usersRoutes);
app.use("/roleUser", roleUserRoutes);

app.listen(PORT, console.log(`Server is running at PORT:${PORT}`));
