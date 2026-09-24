import { Router } from "express";
import moviesController from "./movies.controller.js";

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.get("/:id", moviesController.getMovieById);
moviesRouter.post("/", moviesController.createMovie);

export default moviesRouter;
