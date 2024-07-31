import { Logger } from "../logs/logger";
import { patientService } from "../services/patient-service";
import { usersService } from "../services/users-service";
import { users, patients } from "./initial-data";
import Patient from "./models/patient-model";
import User from "./models/user-model";

const initDB = async () => {
    const usersCount = await User.countDocuments();

    if (usersCount != 0) return;

    for (let i = 0; i < users.length; i++) {
        const userData = users[i];
        await usersService.createUser(userData);


    }
    const patientsCount = await Patient.countDocuments();

    if (patientsCount != 0) return;

    for (let i = 0; i < patients.length; i++) {
        const patientData = patients[i];
        await patientService.createPatient(patientData);


    }

    Logger.log("Users and Patients are Created");
}

export default initDB;
