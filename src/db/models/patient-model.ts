import mongoose from "mongoose";
import patientSchema from "../schemas/patient-schema";

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;