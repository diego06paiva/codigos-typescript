import express, { NextFunction, Request, Response } from 'express'

const app = express()


app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Hello express")
})

app.post("/api/product", (req, res) =>{
    console.log(req.body)

    return res.send("Produto adicionado!")
})

app.all("/api/product/check", (req, res) =>{
    
    if(req.method === "POST"){
        return res.send('Enviando requisição')
    } else if (req.method === "GET"){
        return res.send('Pegando requisição')
    } else{
        return res.send('Nenhum dos dois')
    }
})

app.get("/api/interface", (req: Request, res: Response) => {
    return res.send("utilizando interfaces")
})

app.get("/api/json", (req: Request, res: Response) =>{
    return res.json({
        nome: "diego",
        idade: 21,
        tamanho: ["P", "M", "G"]
    })
}) 

app.get("/api/product/:id", (req:Request, res:Response) =>{
    console.log(req.params)

    const id = req.params.id

    if(id === "1"){
        const product = {
            id: 1,
            valor: 10,
            product: "Boné"
        }
        return res.json(product)
    }
    else if(id === "2"){
        const product = {
            id:2,
            valor: 30,
            product: "Televisão"
        }
        return res.json(product)
    }

    return res.send("Produto não encontrado")
})

function checkUser(req: Request, res: Response, next:NextFunction){
    if (req.params.id === "1") {
        console.log("Pode seguir")
        next()
    } else{
        console.log("Não pode seguir")
    }
}


app.get("/api/user/:id/acess", checkUser, (req: Request, res: Response) =>{
    return res.json({
        msg: "Bem vindo"
    })
})

app.listen(3000, () =>{
    console.log("Testado e funcionando com sucessooo")
})