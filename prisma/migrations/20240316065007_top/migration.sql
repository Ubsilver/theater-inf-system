-- CreateEnum
CREATE TYPE "Pol" AS ENUM ('FEMELE', 'MELE');

-- CreateTable
CREATE TABLE "Sotrudniki" (
    "id" SERIAL NOT NULL,
    "photo" TEXT,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "pol" "Pol" NOT NULL DEFAULT 'MELE',
    "data_rojdenia" TIMESTAMP(3) NOT NULL,
    "deti" INTEGER NOT NULL DEFAULT 0,
    "data_priema_na_rabotu" TIMESTAMP(3) NOT NULL,
    "zarplata" INTEGER NOT NULL,
    "doljnolstId" INTEGER NOT NULL,
    "podrazdelenieId" INTEGER NOT NULL,

    CONSTRAINT "Sotrudniki_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doljnolst" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Doljnolst_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Podrazdelenie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Podrazdelenie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zvanie_sotrudnikov" (
    "id" SERIAL NOT NULL,
    "data_vidachi" TIMESTAMP(3),
    "zvanie" TEXT NOT NULL,
    "konkurs" TEXT,
    "sotrudnikiId" INTEGER NOT NULL,

    CONSTRAINT "Zvanie_sotrudnikov_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role_sotrudnika" (
    "id" SERIAL NOT NULL,
    "data_vidachi" TIMESTAMP(3),
    "roleId" INTEGER NOT NULL,
    "sotrudnikiId" INTEGER NOT NULL,

    CONSTRAINT "Role_sotrudnika_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vid_roleId" INTEGER NOT NULL,
    "spektakliId" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vid_role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vid_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spektakli" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "opisanie" TEXT,
    "photo" TEXT,
    "avtorId" INTEGER NOT NULL,
    "janriId" INTEGER NOT NULL,

    CONSTRAINT "Spektakli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avtor" (
    "id" SERIAL NOT NULL,
    "photo" TEXT,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "o_avtore" TEXT,
    "vek" TEXT NOT NULL,
    "strana" TEXT NOT NULL,

    CONSTRAINT "Avtor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Janri" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Janri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokaz" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "spektakliId" INTEGER NOT NULL,
    "zalId" INTEGER NOT NULL,

    CONSTRAINT "Pokaz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "Zal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bilet" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "pokazId" INTEGER NOT NULL,

    CONSTRAINT "Bilet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sotrudniki" ADD CONSTRAINT "Sotrudniki_doljnolstId_fkey" FOREIGN KEY ("doljnolstId") REFERENCES "Doljnolst"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sotrudniki" ADD CONSTRAINT "Sotrudniki_podrazdelenieId_fkey" FOREIGN KEY ("podrazdelenieId") REFERENCES "Podrazdelenie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zvanie_sotrudnikov" ADD CONSTRAINT "Zvanie_sotrudnikov_sotrudnikiId_fkey" FOREIGN KEY ("sotrudnikiId") REFERENCES "Sotrudniki"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role_sotrudnika" ADD CONSTRAINT "Role_sotrudnika_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role_sotrudnika" ADD CONSTRAINT "Role_sotrudnika_sotrudnikiId_fkey" FOREIGN KEY ("sotrudnikiId") REFERENCES "Sotrudniki"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_vid_roleId_fkey" FOREIGN KEY ("vid_roleId") REFERENCES "Vid_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_spektakliId_fkey" FOREIGN KEY ("spektakliId") REFERENCES "Spektakli"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spektakli" ADD CONSTRAINT "Spektakli_avtorId_fkey" FOREIGN KEY ("avtorId") REFERENCES "Avtor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spektakli" ADD CONSTRAINT "Spektakli_janriId_fkey" FOREIGN KEY ("janriId") REFERENCES "Janri"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokaz" ADD CONSTRAINT "Pokaz_spektakliId_fkey" FOREIGN KEY ("spektakliId") REFERENCES "Spektakli"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokaz" ADD CONSTRAINT "Pokaz_zalId_fkey" FOREIGN KEY ("zalId") REFERENCES "Zal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bilet" ADD CONSTRAINT "Bilet_pokazId_fkey" FOREIGN KEY ("pokazId") REFERENCES "Pokaz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
