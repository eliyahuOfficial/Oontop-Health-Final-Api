import { RequestHandler } from "express";
import OonTopError from "../errors/OonTopError";
import { validateToken } from "./validate-token";

const _isAdmin: RequestHandler = (req, _, next) => {
    const { isAdmin } = req.payload;

    if (isAdmin) {
        return next();
    }

    next(new OonTopError(403, "Must be a admin"))
}

export const isAdmin = [validateToken, _isAdmin];
