import { IComment, IMergedPatient } from "../@types/@types";
import MergedPatient from "../db/models/merged-patient-model";
import { usersService } from "./users-service";
import Comment from "../db/models/comment-model";


export const commentService = {

    getAllCommentsById: async (patientId: string) => {
        const comments: IComment[] = await Comment.find({ mergedPatientId: patientId })
        const getInfoUserComment = await Promise.all(
            comments.map(async (comment: IComment) => {
                const user: any = await usersService.getUserById(comment.userId);
                return {
                    ...comment,
                    user
                };
            })
        );

        return getInfoUserComment;
    },

};




export const mergedPatientService = {


    saveMergedPatient: async (data: IMergedPatient) => {

        const newMergedPatient = new MergedPatient(data);
        return await newMergedPatient.save();
    },

    getAllMergedPatients: async () => MergedPatient.find(),


    getMergedPatientById: async (id: string) => {
        return MergedPatient.findById(id);
    },

    deleteMergedPatient: async (id: string) => {
        return MergedPatient.findByIdAndDelete(id);
    },

    updateMergedPatient: async (id: string, data: IMergedPatient) => {
        return MergedPatient.findByIdAndUpdate(id, data, { new: true })
    },


};