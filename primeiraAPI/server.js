// importa a biblioteca http
const http = require("node:http");

//cria o servidor
const server = http.createServer((req, res) => {
  if (req.url === "/senai") {
    const escolaSenai = {
      nome: "Senai Ricardo Lener",
      telefone: "11 4618-1600",
      endereco: "Rua direita, 955 Vila Santo Antonio, Cotia-SP",
      cursos: [
        "Devesenvolvimento de sistemas",
        "Administração",
        "Eletromecânica",
      ],
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(escolaSenai));
  }

  if (req.url === "/ary") {
    const escolaAry = {
      nome: "Escola Ary Bouzan",
      telefone: "11 4617-4306",
      endereco: "Rua direita, 601, Vila Santo Antonio, Cotia-SP",
      modalidade: ["Ensino Regular", "Programa Ensino Integral (PEI)"],
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(escolaAry));
  }
  if (req.url === "/infoSenai") {
    const infoSenai = {
      diretor: "Alexssandro Augusto Reginato",
      coordenador: "Wilson Donizeti Fernandes",
      aqv: "Isabel Cristina",
      InstrutoresTI: [
        "Matheus da Costa Zacariaz",
        "Giovani Ribeiro Pinto",
        "Edmar Dantas da Silva Duarte",
      ],
      instrutoresMecanica: [
        "Diego Pulheze",
        "Luis Carlos Simei",
        "Deocleciano Reis Martins",
      ],
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(infoSenai));
  }
});

// req=pedido res= resposta

// Coloca o servidor para a roda na porta 3000
server.listen(3000, () => console.log("API rodando em http://localhost:3000"));
