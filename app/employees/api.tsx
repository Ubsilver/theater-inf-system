// import prisma from "@/prisma/prisma";

// export async function getEmployees() {
//   const fieldsToSelect = {
//     id: true,
//     photo: true,
//     last_name: true,
//     first_name: true,
//     pol: true,
//     data_rojdenia: true,
//     deti: true,
//     data_priema_na_rabotu: true,
//     zarplata: true,
//     doljnolst: true,
//     podrazdelenie: true,
//     zvanie_sotrudnikov: true,
//     role_sotrudnika: true,
//   };
  
//   const employees = await prisma.sotrudniki.findMany({ select: fieldsToSelect });  
//   return employees;
// }
import axios from 'axios';

export async function getEmployees() {
  try {
    const response = await axios.get('/api/empl/employees');
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
}
