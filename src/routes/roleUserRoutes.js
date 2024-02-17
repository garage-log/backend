import express from "express";

import { registerRoleUser,findAllRole } from "../services/roleUserServices.js";

const roleRouter = express.Router();

roleRouter.get("/registerRole", registerRoleUser);
roleRouter.get("/findAllRole", findAllRole);

export default roleRouter;