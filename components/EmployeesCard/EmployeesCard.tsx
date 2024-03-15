import React from "react";
import "./EmployeesCard";
import { Button } from "@nextui-org/react";
// import ModalEmployees from "../Modal/Modal";

type Props = {
  id: number;
  photo?: string | null;
  last_name: string;
  first_name: string;
  pol: string;
  data_rojdenia: Date;
  doljnolst: { id: number; name: string };
  zarplata: number;
  podrazdelenie: { id: number; name: string };
  onDetailsClick: () => void;
};

export default function EmployeesCard({
  id,
  photo,
  last_name,
  first_name,
  pol,
  data_rojdenia,
  doljnolst,
  podrazdelenie,
  zarplata,
  onDetailsClick,
}: Props) {
  const genderText = pol === "MELE" ? "Мужской" : "Женский";
  const date = new Date(data_rojdenia);
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  return (
    <div className="employees-card">
      {photo && <img src={photo} alt="фото сотрудника" />}
      <div className="employees-card-text">
        <h2>
          {last_name} {first_name}
        </h2>
        <p>Должность: {doljnolst.name}</p>
        <p>Дата рождения: {formattedDate}</p>
        <p>{podrazdelenie.name}</p>
        <p>Зарплата: {zarplata}руб.</p>
        {/* <button onClick={onDetailsClick = () =>{<ModalEmployees />}}>Подробности</button>       */}
      </div>
    </div>
  );
}
