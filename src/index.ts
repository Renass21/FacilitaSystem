import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/tarefa", (req: Request, res: Response) =>{

})

app.get("/tarefas", (req: Request, res: Response) =>{
  
})

app.listen(3333, () => {
  console.log("A API está rodando!");
});
