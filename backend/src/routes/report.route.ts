import { Router } from "express";
import { getAllReportsController, updateReportSettingController } from "../controllers/report.controller.js";


const reportRoutes = Router();

reportRoutes.get("/all", getAllReportsController);
reportRoutes.put("/update-setting", updateReportSettingController);

export default reportRoutes;