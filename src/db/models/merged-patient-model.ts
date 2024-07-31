import mongoose from "mongoose";
import mergedPatientSchema from "../schemas/merged-patient-schema";

const MergedPatient = mongoose.model("MergedPatient", mergedPatientSchema)

export default MergedPatient