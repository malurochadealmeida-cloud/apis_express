const express = require("express");
const app = express()

app.use (express.json())
let proximoID=2

//post = cria pratos

const pratos =[
   {id:1, nome:"Esfiha de frango", descricao: "Esfiha de frango com catupiry", preco:7},

]
app.get("/pratos", (req, res) => {
  res.json(pratos);
});

//get = lista pratos 

app.post("/pratos", (req, res) => {
  const { nome,descricao,preco } = req.body 

if(!nome || !descricao || !preco){
     return res.status(400).json({ error: "nome, descriçâo e preço são obrigatórios " });

}
const novoPrato= {
id: proximoID,
nome,
descricao, 
preco
}

pratos.push(novoPrato)
  proximoID++
res.status(201).json(novoPrato)

})

  app.listen(3001, () => console.log("API rodando em localhost:3001"));