import { prisma } from "@prisma/client";
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function EMPLOYEE(request){
    const res = await request.json()
    const {last_name,
        first_name,
        middle_name,
        photo,
        pol,
        data_rojdenia,
        deti,
        podrazdelenieId,
        data_priema_na_rabotu,
        zarplata,
        doljnolstId} = res;
    console.log({res})

    const result = await prisma.Sotrudniki.create({
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
                    id: podrazdelenieId
                }
            },
            data_priema_na_rabotu: new Date(data_priema_na_rabotu),
            zarplata,
            doljnolst: {
                connect: {
                    id: doljnolstId
                }
            }
        }
    })

    return NextResponse.json({result})
}