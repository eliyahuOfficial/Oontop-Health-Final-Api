import Joi from "joi";
import { IPatientInput } from "../@types/@types";



const patientSchema = Joi.object<IPatientInput>({
    firstName: Joi.string().min(2).max(25).required(),
    lastName: Joi.string().min(2).max(25).required(),
    patientDOB: Joi.string().min(2).max(25).required(),
    patientGender: Joi.string().min(2).max(11).required(),
    patientZipCode: Joi.string().min(2).max(20).required(),
    providers: Joi.string().min(2).max(25).required(),
    providerURL: Joi.string().min(6).max(256).required(),
    treatmentDate: Joi.string().min(6).max(25).required(),
    startTime: Joi.string().min(6).max(25).required(),
    endTime: Joi.string().min(6).max(25).required(),
    features: Joi.string().min(2).max(256).required(),
    meetingType: Joi.string().min(2).max(256).required(),
    dayStart: Joi.string().min(2).max(25).required(),
    dayEnd: Joi.string().min(2).max(25).required(),
    url: Joi.string().min(2).max(256).required(),
    userActivity: Joi.string().min(2).max(256).required(),
    comments: Joi.string().min(2).max(256).required(),
    treatmentDuration: Joi.number().min(2).max(55),


});

export default patientSchema;