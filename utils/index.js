import AgrolinkException from "../libs/exceptions/AgrolinkException.js";
import {INVALID_CREDENTIALS} from "../libs/exceptions/errorMessages.js";

export function validate(farmer){
    const isValidFullName = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(farmer.name.trim());
    if (!isValidFullName) {
        throw new AgrolinkException(INVALID_CREDENTIALS);
    }
}