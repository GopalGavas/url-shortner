import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error!", error);
    });

    const PORT = process.env.PORT || 8001;
    app.listen(PORT, () => {
      console.log(
        `MongoDB connection successfull ⚙ !!  App is listening on PORT ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error);
    throw error;
  });
