import { randomUUID } from "crypto";

export class Tafefa {
    public id: string;

    constructor(
        public titulo: string,
        public email: string,
        public conteudo: string, 
    ){
        this.id = randomUUID();
    }
}

