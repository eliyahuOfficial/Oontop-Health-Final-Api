import { Schema, } from 'mongoose';
import { IComment } from '../../@types/@types';
import nameSchema from './name-schema';



const commentSchema = new Schema<IComment>({
    name: nameSchema,

    userId: {
        type: String,
        required: true
    },
    patientId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

export default commentSchema;
