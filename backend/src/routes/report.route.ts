import { Router } from "express";
import { generateReportController, getAllReportsController, updateReportSettingController } from "../controllers/report.controller.js";


const reportRoutes = Router();

reportRoutes.get("/all", getAllReportsController);
reportRoutes.put("/update-setting", updateReportSettingController);
reportRoutes.get("/generate", generateReportController);

export default reportRoutes;