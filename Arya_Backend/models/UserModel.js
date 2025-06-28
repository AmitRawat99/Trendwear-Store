import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/DatabaseConnection.js";

const UsersProfile = sequelize.define("Users", {
    userId: { type: DataTypes.STRING, allowNull: false, unique  : true },
    userName: { type: DataTypes.STRING, allowNull: false, },
    password: { type: DataTypes.STRING, allowNull: false, },
    email: { type: DataTypes.STRING, allowNull: false, unique : true },
    number: { type: DataTypes.NUMBER, allowNull: false, }
}, {
    tableName: "UserProfile",
    timestape: true
})

export default UsersProfile