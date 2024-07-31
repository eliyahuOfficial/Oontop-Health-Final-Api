import { Schema } from "mongoose";
import { IPatient } from "../../@types/@types";




const patientSchema = new Schema<IPatient>({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    patientDOB: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    patientGender: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 11
    },

    patientZipCode: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
        unique: true
    },
    providers: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    providerURL: {
        type: String,
        required: false,
        minlength: 6,
        maxlength: 55,

    },
    treatmentDate: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 25,

    },
    startTime: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 25,

    },
    endTime: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 25,

    },
    features: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,

    },
    meetingType: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,

    },
    dayStart: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25,

    },
    dayEnd: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 55,

    },
    url: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,


    },
    userActivity: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,

    },
    comments: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,

    },

    treatmentDuration: {
        type: Number,
        required: false,
        minlength: 2,
        maxlength: 55,
    },

    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },



});



export default patientSchema;