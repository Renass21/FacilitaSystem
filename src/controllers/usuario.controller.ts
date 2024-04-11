import { Request, Response } from "express";

export class UsuarioController {

    public async novoUsuario(req: Request, res: Response){
        try {
            //Entrada
            const {nome, email, senha, idade} = req.body;

            if(!nome || !email || !senha ) {
                return res.status(400).send({
                    ok: false,
                    message: "Informe todos os campos obrigatórios"
                });    
            }
            // Processamento
            //const usuario = await ;

        } catch (error: any) {
            return res.status(500).send({
                ok:false,
                message: error.toString()
            })
        }
    } 
}