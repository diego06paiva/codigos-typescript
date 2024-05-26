const express = require("express")
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "Primeira rota criada com sucesso"})
})

app.post('/posta', (req, res) => {
   
    const nome = req.body.nome
    const idade = req.body.idade

    console.log(nome)
    console.log(idade)

    res.json({message: `O produto ${nome} tem essa idade ${idade}`})

})


app.listen(3000)