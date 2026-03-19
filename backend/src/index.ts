import "dotenv/config";
//dotenv.config();


import express from "express";
import type { NextFunction, Request, Response } from "express";
import cors from "cors";

import { Env } from "./config/env.config.js";
import { HTTPSTATUS } from "./config/http.config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { BadRequestException } from "./utils/app-error.js";
import { asyncHandler } from "./middlewares/asyncHandler.middleware.js";
import connctDatabase from "./config/database.config.js";

const app = express();

const BASE_PATH = Env.BASE_PATH;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
  })
);

// Routes
app.get(
  "/",
  asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestException("This is a test error");
    res.status(HTTPSTATUS.OK).json({
      message: "Lets build this project",
    });
  })
);

app.use(errorHandler)

// Server
app.listen(Env.PORT, async() => {
  await connctDatabase();
  console.log(
    `Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`
  );
});