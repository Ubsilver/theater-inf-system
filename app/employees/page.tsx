import React from "react";
import prisma from "@/prisma/prisma";
import EmployeesCard from "@/components/EmployeesCard/EmployeesCard";
import { Button, Modal, useDisclosure } from "@nextui-org/react";

async function getEmployees() {
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


const defaultImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcytricks.com%2Fpenyebab-foto-profil-wa-orang-lain-tidak-terlihat%2F&psig=AOvVaw2jACcVx5wfcNvTY9cYLa6k&ust=1710413874785000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC0rK2K8YQDFQAAAAAdAAAAABAJ";
function handleDetailsClick(key: number){
   console.log("оно работает")
}

export default async function Employees() {
  const employees = await getEmployees();

  return (
    <div>
      <p className="text-black font-bold text-40 leading-6 px-10 py-5">Сотрудники</p>
      <div>
        <div className="border-1 px-25 py-10 mx-30">фильтры</div>
        <div className="flex flex-row wrap">
          {
            employees.map((sotrudniki: any) => {
              const date = new Date(sotrudniki.data_rojdenia);
              const formattedDate = `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`;

              return (
                // <div className='employees-card' key={sotrudniki.id}>
                //   <img src={sotrudniki.photo || defaultImage} alt="фото сотрудника" />
                //   <h2>{sotrudniki.last_name} {sotrudniki.first_name}</h2>
                //   <p>Должность: {doljnolst.name}</p>
                //   <p>Дата рождения: {formattedDate}</p>
                //   <Button>Подробнее</Button>
                // </div>
    //             <div className='employees-card'>
    //   <img src={photo} alt="фото сотрудника" />
    //   <div className='employees-card-text'>
    //   <h2>{last_name} {first_name}</h2>
    //   <p>Должность: {doljnolst.name}</p>
    //   <p>Дата рождения: {formattedDate}</p>
    //   <Button onClick={onDetailsClick}>Подробнее</Button>
    //   </div>
      
    // </div>
                <EmployeesCard
                  key={sotrudniki.id}
                  id={sotrudniki.id}
                  photo={sotrudniki.photo || defaultImage}
                  last_name={sotrudniki.last_name}
                  first_name={sotrudniki.first_name}
                  pol={sotrudniki.pol}
                  data_rojdenia={sotrudniki.data_rojdenia}
                  doljnolst={sotrudniki.doljnolst}
                  zarplata={sotrudniki.zarplata}
                  onDetailsClick={() => handleDetailsClick(sotrudniki.id)}                  
                  />
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}