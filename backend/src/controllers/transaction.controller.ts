import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import { HTTPSTATUS } from "../config/http.config.js";
import { createTransactionSchema } from "../validators/transaction.validator.js";
import { createTransactionService, getAllTransactionService } from "../servies/transaction.service.js";
import type { TransactionTypeEnum } from "../models/transaction.model.js";

export const createTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = createTransactionSchema.parse(req.body);
    const userId = req.user?._id;

    const transaction = await createTransactionService(body, userId);

    return res.status(HTTPSTATUS.CREATED).json({
      message: "Transacton created successfully",
      transaction,
    });
  }
);


export const getAllTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const filters: {
      keyword?: string;
      type?: keyof typeof TransactionTypeEnum;
      recurringStatus?: "RECURRING" | "NON_RECURRING";
    } = {
      ...(req.query.keyword && { keyword: req.query.keyword as string }),
      ...(req.query.type && { type: req.query.type as keyof typeof TransactionTypeEnum }),
      ...(req.query.recurringStatus && { recurringStatus: req.query.recurringStatus as "RECURRING" | "NON_RECURRING" }),
    };

    const pagination = {
      pageSize: parseInt(req.query.pageSize as string) || 20,
      pageNumber: parseInt(req.query.pageNumber as string) || 1,
    };

    const result = await getAllTransactionService(userId, filters, pagination);

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction fetched successfully",
      ...result,
    });
  }
);
