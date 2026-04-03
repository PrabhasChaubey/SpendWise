import { Router } from "express";
import { chartAnalyticsController, summaryAnalyticsController } from "../controllers/analytics.controller.js";


const analyticsRoutes = Router();

analyticsRoutes.get("/summary", summaryAnalyticsController);
analyticsRoutes.get("/chart", chartAnalyticsController);


export default analyticsRoutes;

