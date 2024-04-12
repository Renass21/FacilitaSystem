import { randomUUID } from "crypto";

export class Tarefa {
    public id: string;

    constructor(
        public tarefaNro: string,
        public titulo: string,
        public conteudo: string
    ) {
        this.id = randomUUID();
    }
}
