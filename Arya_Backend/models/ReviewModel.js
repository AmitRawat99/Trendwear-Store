import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/DatabaseConnection.js";

const Review = sequelize.define("Review", {
    ProductId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "review", timestamps: false })


export default Review