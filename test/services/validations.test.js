import {INVALID_CREDENTIALS} from "../../libs/exceptions/errorMessages.js";
import AgrolinkException from "../../libs/exceptions/AgrolinkException.js";
import {validate} from "../../utils/index.js";
const { expect } = await import('chai');

describe("validation tests",()=>{
    it("should accept valid names", () => {
        expect(() => validate({ name: "John Mike Name" })).to.not.throw();
        expect(() => validate({ name: "John Doe" })).to.not.throw();
    });

    it("should reject invalid names", () => {
        expect(() => validate({ name: "John123" }))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validate({ name: "John Doe_Smith" }))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validate({ name: " John " }))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validate({ name: "Invalid :{}name" }))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
        expect(() => validate({ name: "" }))
            .to.throw(AgrolinkException, INVALID_CREDENTIALS);
    });

})