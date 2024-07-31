import { RequestHandler } from "express";
import OonTopError from "../errors/OonTopError";
import { validateToken } from "./validate-token";

const _isAdminOrSelf: RequestHandler = (req, res, next) => {
    const requestedId = req.params.id;
    const userId = req.payload._id;

    if (requestedId === userId || req.payload.isAdmin) {
        return next();
    }

    next(new OonTopError(403, "Must be the requested user or admin"));

};

export const isAdminOrSelf = [validateToken, _isAdminOrSelf] 