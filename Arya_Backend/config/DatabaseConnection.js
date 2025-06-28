import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT
    }
);


const ConnectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ MySQL Database Connected Successfully");

    } catch (error) {
        console.error("❌ Unable to connect to the database:", error.message);
    }
}

export default ConnectDb