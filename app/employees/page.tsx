'use client'
import React, { useEffect, useState } from "react";
import './st.css'
import EmployeesCard from "@/components/EmployeesCard/EmployeesCard";
import { Radio, RadioGroup } from "@nextui-org/react";
import RadioGroupComponent from "@/components/RadioGroupComponent/RadioGroupComponent";
import { getEmployees } from "./api";

interface Employee {
  id: number;
  photo: string | null;
  last_name: string;
  first_name: string;
  pol: string;
  data_rojdenia: Date;
  deti: number;
  data_priema_na_rabotu: Date;
  zarplata: number;
  doljnolst: { id: number; name: string };
  podrazdelenie: { id: number; name: string };
  zvanie_sotrudnikov: any[];
  role_sotrudnika: any[];
}

const defaultImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcytricks.com%2Fpenyebab-foto-profil-wa-orang-lain-tidak-terlihat%2F&psig=AOvVaw2jACcVx5wfcNvTY9cYLa6k&ust=1710413874785000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC0rK2K8YQDFQAAAAAdAAAAABAJ";
function handleDetailsClick(key: number){
   console.log("оно работает")
}

export default function Employees() {
  const [selectedOption, setSelectedOption] = useState('alls');
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getEmployees();
      setEmployees(data);
    }
    fetchData();
  }, []);

  const handleRadioChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
  };
  return (
    <div >
      <p className="text-black font-bold text-40 leading-6 px-10 py-5">Сотрудники</p>
      <div>
        <div className="border-1 filter">
          <div>
          {/* <RadioGroup
            label="Сотрудники:"
            orientation="horizontal"
            color="primary"
            defaultValue="alls"
            // onChange={handleRadioChange}
            // value={selectedOption}

            // onChange={(e) => setSelectedOption(e.target.value)} 
      
          >
            <Radio value="alls">Все</Radio>
            <Radio value="nashi">Нашего театра</Radio>
            <Radio value="prigshenie">Приглашенные</Radio>
            <Radio value="students">Студенты училища</Radio>
          </RadioGroup> */}
          <RadioGroupComponent onChange={handleRadioChange} />
          <RadioGroup
            label="Должности:"
            orientation="horizontal"
            color="primary"
            defaultValue="alld"
            isDisabled
          >
            <Radio value="alld">Все</Radio>
            <Radio value="actors">Актеры</Radio>
            <Radio value="music">Музыканты</Radio>
            <Radio value="postanovka">Постановщики</Radio>
            <Radio value="slujachiy">Служащие</Radio>
            <Radio value="director">Директор</Radio>
          </RadioGroup>
          </div>
        </div>
        <div className="flex flex-row wrap">
        {/* {selectedOption === 'alls' && <div>Отображается содержимое для "Все"</div>} */}
          {
            employees.map((sotrudniki: any) => {
              const date = new Date(sotrudniki.data_rojdenia);
              const formattedDate = `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`;

              return (
                
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
                  podrazdelenie={sotrudniki.podrazdelenie}
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