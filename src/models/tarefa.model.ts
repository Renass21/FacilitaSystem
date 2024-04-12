import { randomUUID } from "crypto";

export class Tarefa {
        public id: string;
        public tarefaNro: string;
    constructor(
        public titulo: string,
        public conteudo: string
    ) {
        this.id = randomUUID();
        this.tarefaNro = randomUUID();
    }
}
