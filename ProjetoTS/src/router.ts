import {Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

import { validate } from "./middleware/validator";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

export default router.get("/teste", (req: Request, res: Response) =>{
    res.status(200).send("Api funcionando")
}).post("/movie", movieCreateValidation(), validate, createMovie)