// import "../utils/sentry";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// SETTINGS
const app = express();
app.set("port", 3000);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(json());app.use(json());
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

export default app;
