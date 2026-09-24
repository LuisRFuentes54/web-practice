import { Router } from "express";
import moviesRouter from "../modules/movies/movies.router.js";

const routerIndex = Router();

routerIndex.get("/test", (req, res) => {
    res.status(200).send({
        message: "Hola desde el router"
    });
});

routerIndex.use("/movies", moviesRouter);

export default routerIndex;