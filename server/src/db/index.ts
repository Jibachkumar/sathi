import { Sequelize } from "sequelize";
import logger from "../utils/logger.js";

const sequelize = new Sequelize(
  "sathi",
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: "localhost",
    port: 5433,
    dialect: "postgres",
    logging: false,
  },
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Unable to connect to the database: ${error.message}`);
    } else {
      logger.error(`Unable to connect to the database: ${String(error)}`);
    }
  }
};

export { connectDB, sequelize };
