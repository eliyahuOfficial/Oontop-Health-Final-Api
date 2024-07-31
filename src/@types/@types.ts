
/////Patient type/////
export type IPatientInput = {

    firstName: string;
    lastName: string;
    patientDOB: string;
    patientGender: string;
    patientZipCode: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    startTime: string;
    endTime: string;
    features: string;
    meetingType: string;
    dayStart: string;
    dayEnd: string;
    url: string;
    userActivity: string;
    comments: string;
    treatmentDuration?: number;


};

export type IPatient = IPatientInput & {

    _id: string,
    bizNumber: Number,
    createdAt: Date,

};

export type IMergedPatient = {
    _id: string,
    firstName: string;
    lastName: string;
    patientDOB: string;
    patientGender: string;
    patientZipCode: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    treatmentDuration: number;
    startTime: string;
    endTime: string;
    features: string;
    dayStart: string;
    dayEnd: string;
    meetingType: string;
    url: string;
    userActivity: string;
    comments: string;
};


/////User Type/////

export type IName = {
    first: string;
    middle?: string;
    last: string;
};

export type IAddress = {
    street: string;
    city: string;
    state?: string;
    zip?: string;
    country: string;
    houseNumber: number;
};




export type IUserInput = {
    email: string;
    phone: string;
    password: string;
    isBusiness: boolean;
    address: IAddress;
    name: IName;

};

export type IUser = IUserInput & {
    createdAt: Date;
    isAdmin: boolean;
};

export type IComment = {
    userId: string,
    mergedPatientId: string,
    text: string,
    createdAt: Date,
    name: IName,


};

/////Login/////


export type ILogin = {
    email: string;
    password: string;
};


export type IJWTPayload = {
    _id: string,
    isAdmin: boolean,
    isBusiness: boolean,
};




