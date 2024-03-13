import prisma from "@/prisma/prisma";
import { createEffect } from "effector";


export const getEmployeesFx = createEffect(async () => {
	try {
		const response = await prisma.sotrudniki.findMany();
		return response;
	} catch (error) {
		throw error;
	}
});