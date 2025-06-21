import {validateFarmer} from "../utils/index.js";
import {FarmersRepository} from '../data/models/index.js'
import {Op} from "sequelize";
import AgrolinkException from "../libs/exceptions/AgrolinkException.js";
import {USER_ALREADY_EXISTS} from "../libs/exceptions/errorMessages.js";

export async function registerFarmer(farmer){
   validateFarmer(farmer);
   const existingFarmer = FarmersRepository.findOne({
      where:{
         [Op.or]:[
             {email:farmer.email},
            {phoneNumber: farmer.phoneNumber}
         ]
      }
   });
   if(!existingFarmer) throw new AgrolinkException(USER_ALREADY_EXISTS);
   return FarmersRepository.create(farmer);
}
