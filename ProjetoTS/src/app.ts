require("dotenv").config()
import express  from "express"
import config from "config"

const app = express()

app.use(express.json())

import db from "../config/db"

import router from "./router"

import Logger from "../config/logger"

import morganmiddleware from "./middleware/morgan"


app.use("/api/", router)

app.use(morganmiddleware)


const porta = config.get<number>("porta")


app.listen(porta, async () =>{

    await db()
    console.log(`Funcionando na porta ${porta}`)
})

console.log("deu bom!")