import {validateFarmer} from "../utils/index.js";

export function register(farmer){
   validateFarmer(farmer);
   farmersDB.save(farmer);
}