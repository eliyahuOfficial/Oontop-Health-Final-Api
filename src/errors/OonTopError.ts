class OonTopError {
    status: number;
    message: string;


    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }


    static gen(status: number, message: string) {
        return new OonTopError(status, message);
    }
}

export default OonTopError;

