import { Router } from "express";
import MergedPatient from "../db/models/merged-patient-model";
import { mergedPatientService } from "../services/merged-patients-service";
import Comment from '../db/models/comment-model';
import { validateToken } from "../middleware/validate-token";
import { commentService } from "../services/merged-patients-service";
import OonTopError from "../errors/OonTopError";
import { Logger } from "../logs/logger";
import { validatePatient } from "../middleware/joi";
import { isAdmin } from "../middleware/is-admin";





const router = Router();

router.post('/comments', validateToken, async (req, res, next) => {
    const { patientId, text } = req.body;


    try {
        const userId = req.payload._id;
        const newComment = new Comment({ userId, patientId, text });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/comments/:id", async (req, res, next) => {
    try {
        const comments = await commentService.getAllCommentsById(req.params.id);
        if (!comments) {
            Logger.error("No ID provided");
            throw new OonTopError(400, "No ID provided");
        }
        res.json(comments)
    } catch (e) {
        next(e);
    }

});

router.post('/', validatePatient, async (req, res, next) => {
    try {
        const result = await mergedPatientService.saveMergedPatient(req.body);
        res.status(201).json(result);
    } catch (e) {
        next(e)
    }
});

router.get("/", async (req, res, next) => {
    try {
        const patients = await mergedPatientService.getAllMergedPatients();
        res.json(patients);
    } catch (e) {
        next(e);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const patient = await mergedPatientService.getMergedPatientById(req.params.id);
        if (!patient) {
            Logger.error("No ID provided");
            throw new OonTopError(400, "No ID provided");
        }
        res.json(patient);
    } catch (e) {
        next(e);
    }
});


router.put("/:id", ...isAdmin, validateToken, validatePatient, async (req, res, next) => {
    try {
        const result = await mergedPatientService.updateMergedPatient(req.params.id, req.body);
        if (!result) {
            Logger.error("No ID provided");
            throw new OonTopError(400, "No ID provided");
        }
        res.json(result);
    } catch (e) {
        next(e);
    }

});


router.delete("/:id", ...isAdmin, validateToken, async (req, res, next) => {

    try {
        await mergedPatientService.deleteMergedPatient(req.params.id);

        res.json("Card are Deleted");

    } catch (e) {
        next(e);
    }
});

export { router as mergedpatientsRouter }