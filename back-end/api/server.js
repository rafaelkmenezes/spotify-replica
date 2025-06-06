// API significa Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - CREATE (POST), READ (GET), UPDATE (PUT), DELETE (DELETE)

import express from "express";
import cors from "cors"; //Middleware para resolver problemas de domínios diferentes. No caso, de portas diferentes
import { database } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

console.log(__dirname);

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json()); //Usado em requisições tipo POST que transforma em JSON e consegue ler em JS

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

console.log(path.join(__dirname, "../front-end/dist"));

app.get("/*splat", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});
// app.get("*", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
// });
console.log(path.join(path.join(__dirname, "../front-end/dist/index.html")));

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}.`);
});
