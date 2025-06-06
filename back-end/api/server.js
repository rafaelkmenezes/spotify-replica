// API significa Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - CREATE (POST), READ (GET), UPDATE (PUT), DELETE (DELETE)

import express from "express";
import cors from "cors"; //Middleware para resolver problemas de domínios diferentes. No caso, de portas diferentes
import { database } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json()); //Usado em requisições tipo POST que transforma em JSON e consegue ler em JS

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}.`);
});

app.get("/", (request, response) => {
  response.send(
    "Olá, Mundo! Agora não preciso ficar reiniciando o servidor toda vez que mudar o arquivo. A instrução 'node --watch ./server.js' reinicia toda vez que o arquivo é alterado."
  );
});

app.get("/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});
