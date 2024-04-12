/*
  Warnings:

  - The primary key for the `tarefa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `tarefa_numero` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `tarefa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tarefa" DROP CONSTRAINT "tarefa_pkey",
ADD COLUMN     "tarefa_numero" UUID NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id");
