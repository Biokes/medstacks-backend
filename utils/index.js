import AgrolinkException from "../libs/exceptions/AgrolinkException.js";
import {INVALID_CREDENTIALS} from "../libs/exceptions/errorMessages.js";

function assertValid(isValid,exceptionMessage= INVALID_CREDENTIALS){
    if(!isValid){
        throw new AgrolinkException(exceptionMessage)
    }
}

export function validateFullName(name){
    name= name.trim();
    const isValidFullName = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(name);
    assertValid(isValidFullName)
}
export function validateEmail(email){
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email);
    assertValid(isValidEmail);
}
export function validatePhoneNumber(number){
    number = number.replace(/\s+/g,"")
    const isValidNumber = /^\+?[0-9]{1,3}?[0-9]{10,15}$/.test(number);
    assertValid(isValidNumber)
}
export function validateFarmer(farmer){
    validateFullName(farmer.fullName);
    validateEmail(farmer.email);
    validatePhoneNumber(farmer.phoneNumber)
}