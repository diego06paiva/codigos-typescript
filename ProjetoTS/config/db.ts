import mongoose from "mongoose";
import config from "config"
import { copyFileSync } from "fs";


async function connect(){

    const dbUri = config.get<string>("dbUri")
    console.log("Conectou ao banco de dados")

    try {

        await mongoose.connect(dbUri)

    } catch (e) {
        console.log("Deu erro na conexão com banco")
        console.log(`Erro: ${e}`)
    }

}

export default connect