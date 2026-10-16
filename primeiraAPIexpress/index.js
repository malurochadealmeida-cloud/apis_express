// Importanto a biblioteca
const express = require("express");
const app = express()

app.use (express.json())

const livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { id: 2, titulo: "Vidas Secas", autor: "Graciliano Ramos" },
]

let proximoId = 3

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.post("/livros", (req, res) => {
  const { titulo, autor } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({ error: "titulo e autor obrigratorios" });
  }
  const novoLivro = {
    id:proximoId,
    titulo,
    autor,
  };


  livros.push(novoLivro)
  proximoId++
res.status(201).json(novoLivro); //Status 201= CREATE

}) 

app.get("/livrob  /:id", (req,res) =>{
    const idInformado=req.params.id


        const livro= livros.find(li => li.id === Number(idInformado)) 

        if(!livro){
            return res.status(404).json({error:"Livro não encontrado"})
        }

            res.json(livro)

})
  app.listen(3000, () => console.log("API rodando em localhost:3000"));

