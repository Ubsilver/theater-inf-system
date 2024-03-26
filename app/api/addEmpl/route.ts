import {Pol, PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server"
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

interface EmployeeRequest {
    last_name: string;
    first_name: string;
    middle_name: string;
    photo: string;
    pol: string;
    data_rojdenia: string;
    deti: number;
    podrazdelenieId: number;
    data_priema_na_rabotu: string;
    zarplata: number;
    doljnolstId: number;
}

export default async function EMPLOYEE(request: NextApiRequest, response: NextApiResponse){
    const res: EmployeeRequest = await request.body();
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
    } = res;

    console.log({ res });

    let polEnum: Pol | undefined;
    if (pol === Pol.MALE || pol === Pol.FEMALE) {
        polEnum = pol;
    } else {
        // Обработка неверного значения pol
        return response.status(400).json({ error: "Недопустимое значение для пола." });
    }


    const result = await prisma.sotrudniki.create({
        data: {
            last_name,
            first_name,
            middle_name,
            photo,
            pol,
            data_rojdenia: new Date(data_rojdenia),
            deti,
            podrazdelenie: {
                connect: {
                    id: podrazdelenieId,
                },
            },
            data_priema_na_rabotu: new Date(data_priema_na_rabotu),
            zarplata,
            doljnolst: {
                connect: {
                    id: doljnolstId,
                },
            },
        },
    });

    // Используйте response.status().json() для отправки ответа
    return response.status(200).json({ result });
}