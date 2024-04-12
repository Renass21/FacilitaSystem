import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { repository } from "../database/prisma.repository";
import { Tarefa } from "../models/tarefa.model";

export class TarefasController {
    public async criarTarefa(req: Request , res: Response) {
         try {
            const { titulo,conteudo } = req.body;
            
            if(!titulo || !conteudo){
                return res.status(403).send({
                    ok: false,
                    message: "Informe os campos obrigatorios" 
                })
            }
            //processamento
            const novaTarefa = new Tarefa(titulo, conteudo);

            await repository.tarefa.create({
                data: novaTarefa,
            });
            //Saida
            res.status(201).send({
                ok: true,
                message: "Tarefa criada com sucesso",
            }) 
         } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            })
         }   
         
    }

  public async listarTarefas(req: Request, res: Response) {
    try {
        //entrada
               const { id, tarefaNro } = req.params;
                const { titulo, conteudo} = req.body;            
        //processamento
        const tarefas = await repository.tarefa.findUnique({
            where: {
                id: id,
            }
        })
         //Saida
         res.status(200).send({
            ok: true,
            message: "Tarefas listadas com sucesso",
            data: tarefas,
        });
         } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }
  }

  public async atualizarTarefa(req: Request, res: Response){
    try {
        const { id, tarefaNro } = req.params;
        const { titulo, conteudo } = req.body;
        
        if(!titulo || !conteudo){
            return res.status(403).send({
                ok: false,
                message: "Informe os campos obrigatorios" 
            })
        }

        const tarefaExiste = repository.tarefa.findUnique({
            where: {
                id: tarefaNro,
            },
        });

        if(!tarefaExiste){
            return res.status(404).send({
                ok: false,
                message: "Tarefa não encontrada" 
            })
        }


        const result = await repository.tarefa.update({
            where:{
                id: tarefaNro,
            }, 
            data: {
                titulo,
                conteudo,
            }
        })
        //Saida
        res.status(200).send({
            ok: true,
            message: "Tarefa editada com sucesso",
            data: result,
        });

    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }
  }

  public async deletarTarefa(req: Request, res: Response){
    try {
        const { id } = req.params;
        await repository.tarefa.delete({
            where: {
                id: id,
            }
        })
        //Saida
        res.status(200).send({
            ok: true,
            message: "Tarefa deletada com sucesso!",
        });

    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }
  }
}
