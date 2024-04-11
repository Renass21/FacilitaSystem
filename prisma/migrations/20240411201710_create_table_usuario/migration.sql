-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "senha" VARCHAR(15) NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);
