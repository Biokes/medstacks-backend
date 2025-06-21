const { expect } = await import('chai');
const farmerService = await import('../../services/farmerService.js');
const { INVALID_CREDENTIALS } = await import('../../libs/exceptions/errorMessages.js');

describe("Farmer Service",()=>{
    it("Register farmer",()=>{
        let newFarmer = {name:'',address:'',phoneNumber:'',email:''};
        expect(()=>{farmerService.registerFarmer(newFarmer)}).to.throw(INVALID_CREDENTIALS);
        newFarmer = {name:'first name',address:'',phoneNumber:'',email:''};
        expect(()=>{farmerService.registerFarmer(newFarmer)}).to.throw(INVALID_CREDENTIALS);
        newFarmer = {name:'first name',address:'',phoneNumber:'',email:''};
        expect(()=>{farmerService.registerFarmer(newFarmer)}).to.throw(INVALID_CREDENTIALS);
        newFarmer = {name:'first name',address:'',phoneNumber:'',email:'email@biokes.co'};
        expect(()=>{farmerService.registerFarmer(newFarmer)}).to.throw(INVALID_CREDENTIALS);
        newFarmer={name:"full name", address: '', phoneNumber: '+234 891 0128 990',email:'email@biokes.com'}
        expect(()=>{farmerService.registerFarmer(newFarmer)}).not.to.throw();
    })
})
