import { Button, Link } from "@nextui-org/react";
import React from "react";
import "./addData.css"
import AddEmployeer from "./emplModal";

export default function Show() {

  return (
    <div>
      <p className="text-black font-bold text-40 leading-6 px-10 py-5">Добавить данные</p>
      <div className="add-btn">
        <div>
          {/* <AddEmployeer /> */}
            <Link href="/addEmployees"><Button color="primary" variant="ghost">Добавить сотрудника</Button></Link>
            <Button color="primary" variant="ghost">Добавить должность</Button>
            <Button color="primary" variant="ghost">Добавить подразделение</Button>
        </div>
        <div>
            <Button color="primary" variant="ghost">Добавить спектакль</Button>
            <Button color="primary" variant="ghost">Добавить роль</Button>
            <Button color="primary" variant="ghost">Добавить автора спектакля</Button>
            <Button color="primary" variant="ghost">Добавить жанр</Button>
        </div>
        <div>
            <Button color="primary" variant="ghost">Добавить зал</Button>
            <Button color="primary" variant="ghost">Создать показ</Button>
            <Button color="primary" variant="ghost">Создать билет</Button>
        </div>
      </div>
    </div>
  );
}