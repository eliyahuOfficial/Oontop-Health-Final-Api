import _ from "underscore";
import { IPatientInput } from "../@types/@types";
import Patient from "../db/models/patient-model";

import { Logger } from "../logs/logger";




const generateBizNumber = async () => {


    while (true) {
        const r = _.random(1_000_000, 9_999_999);
        const dbRes = await Patient.findOne({ bizNumber: r });
        if (!dbRes) {
            return r;
        }
    }
}




export const patientService = {


    createPatient: async (data: IPatientInput) => {

        const patient = new Patient(data);

        patient.bizNumber = await generateBizNumber();

        Logger.log(patient.bizNumber);
        return patient.save();
    },

    getAllPatients: async () => Patient.find(),

    updatePatient: async (id: string, data: IPatientInput) => {
        return Patient.findByIdAndUpdate(id, data, { new: true });
    },


};
