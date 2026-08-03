import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import logger from "./utils/logger.js";
// import { User } from "./models/user.models.js";
// import { Product } from "./models/product.models.js";
// import { Order } from "./models/order.models.js";

(async () => {
  try {
    await connectDB();

    logger.info("model synced successfully");
    app.listen(process.env.PORT, () => {
      logger.info(`Server is running at port localhost:${process.env.PORT}`);
    });
  } catch (error) {
    logger.error(`postgres connection failed !!!, ${error}`);
  }
})();
