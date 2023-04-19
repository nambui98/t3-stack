/*
  Warnings:

  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_id_fkey";

-- DropTable
DROP TABLE "Answers";

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "pollId" TEXT,
    "text" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll"("id") ON DELETE SET NULL ON UPDATE CASCADE;
