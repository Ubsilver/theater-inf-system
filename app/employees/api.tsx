import prisma from "@/prisma/prisma";

export async function getEmployees() {
  const fieldsToSelect = {
    id: true,
    photo: true,
    last_name: true,
    first_name: true,
    pol: true,
    data_rojdenia: true,
    deti: true,
    data_priema_na_rabotu: true,
    zarplata: true,
    doljnolst: true,
    podrazdelenie: true,
    zvanie_sotrudnikov: true,
    role_sotrudnika: true,
  };
  
  const employees = await prisma.sotrudniki.findMany({ select: fieldsToSelect });  
  return employees;
}
