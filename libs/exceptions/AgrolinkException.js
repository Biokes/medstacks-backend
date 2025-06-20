export default class AgrolinkException extends Error{
    constructor(errorMessage) {
        super(errorMessage);
        this.name = this.constructor.name;
        Error.captureStackTrace(this,this.constructor);
    }
}