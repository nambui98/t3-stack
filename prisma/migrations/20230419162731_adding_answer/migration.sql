-- CreateTable
CREATE TABLE "Poll" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" TEXT NOT NULL,
    "pollId" TEXT,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_id_fkey" FOREIGN KEY ("id") REFERENCES "Poll"("id") ON DELETE CASCADE ON UPDATE CASCADE;
