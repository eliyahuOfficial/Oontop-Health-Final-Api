import { RequestHandler } from "express";
import OonTopError from "../errors/OonTopError";
import { validateToken } from "./validate-token";

const _isBusiness: RequestHandler = (req, res, next) => {
    const { isBusiness } = req.payload;

    if (isBusiness) {
        return next();
    }

    next(new OonTopError(403, "Must be a business"))
}

export const isBusiness = [validateToken, _isBusiness];
