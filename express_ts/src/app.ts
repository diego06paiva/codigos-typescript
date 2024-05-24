import express from 'express'

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

app.listen(3000, () =>{
    console.log("Testado e funcionando com sucessooo")
})