import { Router } from "express";

const routerIndex = Router();

routerIndex.get("/test", (req, res) => {
    res.status(200).send({
        message: "Hola desde el router"
    })
})

export default routerIndex;