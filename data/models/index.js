import {database} from "../../config/index.js";
import {DataTypes, STRING} from "sequelize";

export const FarmersRepository = database.define("Farmer", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    address: {
        type: DataTypes.STRING
    },
},
    {
        timestamps: true
    }
    )