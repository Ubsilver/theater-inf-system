import { NextResponse, NextRequest } from "next/server";
import { PrismaClient, Pol } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const {
    last_name,
    first_name,
    middle_name,
    photo,
    pol,
    data_rojdenia,
    deti,
    podrazdelenieId,
    data_priema_na_rabotu,
    zarplata,
    doljnolstId,
  } = await req.json();

  let polEnum: Pol | undefined;
  if (pol === "MALE") {
    polEnum = Pol.MALE;
  } else if (pol === "FEMALE") {
    polEnum = Pol.FEMALE;
  } else {
    return NextResponse.json(
      { error: "Недопустимое значение для пола." },
      { status: 400 },
    );
  }

  try {
    const result = await prisma.sotrudniki.create({
      data: {
        last_name,
        first_name,
        middle_name,
        photo,
        pol: polEnum,
        data_rojdenia: new Date(data_rojdenia),
        deti,
        podrazdelenie: {
          connect: { id: podrazdelenieId },
        },
        data_priema_na_rabotu: new Date(data_priema_na_rabotu),
        zarplata: +zarplata,
        doljnolst: {
          connect: { id: doljnolstId },
        },
      },
    });
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Ошибка при создании сотрудника:", error);
    return NextResponse.json(
      { error: "Ошибка сервера при создании записи сотрудника." },
      { status: 500 },
    );
  }
}
