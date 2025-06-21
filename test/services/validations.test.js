import {INVALID_CREDENTIALS} from "../../libs/exceptions/errorMessages.js";
import AgrolinkException from "../../libs/exceptions/AgrolinkException.js";
import {validateEmail, validateFullName, validatePhoneNumber} from "../../utils/index.js";
const { expect } = await import('chai');

describe("validation tests",()=>{
    it("should accept valid names", () => {
        expect(() => validateFullName("John Mike Name")).to.not.throw();
        expect(() => validateFullName("John Doe")).to.not.throw();
    });

    it("should reject invalid names", () => {
        expect(() => validateFullName("John123"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validateFullName("John Doe_Smith"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => 
            validateFullName(" John "))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validateFullName("Invalid :{}name"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validateFullName(""))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
    });
    it("should accept valid emails", () => {
        expect(() => validateEmail("user@example.com")).to.not.throw();
        expect(() => validateEmail("john.doe@sub.domain.org")).to.not.throw();
        expect(() => validateEmail("first.last+alias@example.org")).to.not.throw();
    });

    it("should reject invalid domains", () => {
        expect(() => validateEmail("admin@localhost"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);

        expect(() => validateEmail("user@test"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);

        expect(() => validateEmail("me@.com"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);

        expect(() => validateEmail("you@a"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
    });

    it("should reject malformed emails", () => {
        expect(() => validateEmail("noatsymbol.com"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);

        expect(() => validateEmail(" spaces @example.com"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);

        expect(() => validateEmail("user#name@domain.com"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
    });
    it("tests valid and invalid Number",()=>{
        expect(() => validatePhoneNumber("-1298328 21389"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validatePhoneNumber("12 67 78 87 76"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validatePhoneNumber("1267907"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validatePhoneNumber("+o 23 21389 8912389"))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validatePhoneNumber("+2348112121221"))
            .not.to.throw();
        expect(() => validatePhoneNumber("08112121221"))
            .not.to.throw();
        expect(() => validatePhoneNumber("+ 234 811 2121 221"))
            .not.to.throw();
    })
})