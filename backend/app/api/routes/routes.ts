import { Router } from "express";


const sharpe_controller = require("../controllers/sharpeController.ts");

export const defaultRoutes = Router();

defaultRoutes.get('/sharpe', sharpe_controller.get_sharpe_ratio);

