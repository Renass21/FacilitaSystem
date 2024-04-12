import express, { Request, Response } from "express";
import cors from "cors";
import { TarefasController } from "./controllers/tarefas.controller";

const app = express();
app.use(express.json());
app.use(cors());

const tarefasController = new TarefasController()

//Criar tarefas
app.post("/tarefa", tarefasController.criarTarefa);
//Listar tarefas
app.get("/tarefas", tarefasController.listarTarefas);
//Editar tarefa
app.put("/tarefa/:id",tarefasController.atualizarTarefa);
//Deletar tarefa
app.delete("/tarefa/:id", tarefasController.deletarTarefa);

app.listen(3333, () => {
  console.log("A API está rodando!");
});
