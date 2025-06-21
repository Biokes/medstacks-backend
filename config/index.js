import {Sequelize} from 'sequelize';
require('dotenv').config();

export const database = new Sequelize({
    dialect:"mysql",
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    logging:true
})