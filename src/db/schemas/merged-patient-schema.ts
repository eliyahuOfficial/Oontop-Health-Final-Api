import { Schema } from "mongoose";
import { IMergedPatient } from "../../@types/@types";


const mergedPatientSchema = new Schema<IMergedPatient>({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    patientDOB: { type: String, required: true },
    patientGender: { type: String, required: true },
    patientZipCode: { type: String, required: true },
    providers: { type: String, required: true },
    providerURL: { type: String, required: true },
    treatmentDate: { type: String, required: true },
    treatmentDuration: { type: Number, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    features: { type: String, required: true },
    dayStart: { type: String, required: true },
    dayEnd: { type: String, required: true },
    meetingType: { type: String, required: true },
    url: { type: String, required: true },
    userActivity: { type: String, required: true },
    comments: { type: String, required: true },
});

export default mergedPatientSchema;