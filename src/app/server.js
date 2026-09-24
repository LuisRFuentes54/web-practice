import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import routerIndex from "../routes/index.routes.js";
import { env } from "../config/enviroment.js";

// SETTINGS
const app = express();
app.set("port", env.PORT);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());

// ROUTES
app.get("/", async (req, res) => {
  
  res.status(200).send("Server running");
});

app.use("/api", routerIndex);

export default app;
