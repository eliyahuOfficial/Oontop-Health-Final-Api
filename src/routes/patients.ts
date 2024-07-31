import { Router } from "express";
import { patientService } from "../services/patient-service";


const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const patients = await patientService.getAllPatients();
        res.json(patients);
    } catch (e) {
        next(e);
    }
});



export { router as patientsRouter }

