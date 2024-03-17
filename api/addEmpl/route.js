import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server"

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

    const result = await prisma.post.create({
        data: {
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
            doljnolstId
        }
    })

    return NextResponse.json({result})
}