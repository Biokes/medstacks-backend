const { expect } = await import('chai');
const farmerService = await import('../../services/farmerService.js');
const { INVALID_CREDENTIALS } = await import('../../libs/exceptions/errorMessages.js');

describe("Farmer Service",()=>{
    it("Register farmer",()=>{
        const newFarmer = {name:'',surname:'',address:'',phoneNumber:'',email:''};
        expect(()=>{farmerService.register(newFarmer)}).to.throw(INVALID_CREDENTIALS);
    })
})
