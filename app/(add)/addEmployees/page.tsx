'use client'
import { Input, Select, SelectItem } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import React from "react";
import './addEmpl.css'
import { Pol } from "@prisma/client";

export default function Add() {

  const [last_name, setlast_name] = React.useState("");
  const [first_name, setfirst_name] = React.useState("");
  const [middle_name, setmiddle_name] = React.useState("");
  const [data_rojdenia, setdata_rojdenia] = React.useState("");
  const [deti1, setdeti] = React.useState("");
  const [data_priema_na_rabotu, setdata_priema_na_rabotu] = React.useState("");
  const [zarplata1, setzarplata] = React.useState("");
  const [photo, setphoto] = React.useState("");



  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Пол:"]));
  const [selectedKeysDolj, setSelectedKeysDolj] = React.useState(new Set(["Должность:"]));
  const [selectedKeysPodr, setSelectedKeysPodr] = React.useState(new Set(["Подразделение:"]));

  const pol: Pol = selectedKeys.has('мужской пол') ? Pol.MELE : Pol.FEMELE;
  const podrazdelenieId =
    selectedKeysPodr.has('сотрудник нашего театра') ? 1 :
    selectedKeysPodr.has('приглашенный сотрудник') ? 2 :
    selectedKeysPodr.has('студент училища') ? 3 :
    null;
  const doljnolstId = 
    selectedKeysDolj.has('актер') ? 1:
    selectedKeysDolj.has('музыкант') ? 2:
    selectedKeysDolj.has('постановщик') ? 3:
    selectedKeysDolj.has('служащий') ? 4:
    selectedKeysDolj.has('директор') ? 5:
    null;
  const deti: number = parseInt(deti1);
  const zarplata: number = parseInt(zarplata1);


  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const selectedValueDolj = React.useMemo(
    () => Array.from(selectedKeysDolj).join(", ").replaceAll("_", " "),
    [selectedKeysDolj]
  );
  const selectedValuePodr = React.useMemo(
    () => Array.from(selectedKeysPodr).join(", ").replaceAll("_", " "),
    [selectedKeysPodr]
  );

  const HandleSumbit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    try {
      fetch('api/addEmpl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
        })
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={HandleSumbit}>
      {
        <div>
        <p className="text-black font-bold text-40 leading-6 px-10 py-5">Добавить сотрудника</p>
        <div className="container">
          <div className="mini-container">
            <Input
              isRequired
              type="text"
              label="Имя"
              className="max-w-xs elem"
              variant="bordered"
              value={last_name}
              onValueChange={setlast_name}
            />
            <Input
              isRequired
              type="text"
              label="Фамилия"
              className="max-w-xs elem"
              variant="bordered"
              value={first_name}
              onValueChange={setfirst_name}
            />
            <Input
              type="text"
              label="Отчество"
              className="max-w-xs elem"
              variant="bordered"
              value={middle_name}
              onValueChange={setmiddle_name}
            />
            <Dropdown className="elem">
              <DropdownTrigger>
                <Button 
                  variant="bordered" 
                  className="capitalize"
                >
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                isRequired
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                // defaultSelectedKeys="мужской"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                <DropdownItem key="мужской">мужской пол</DropdownItem>
                <DropdownItem key="женский">женский пол</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
  
          <div className="mini-container">
          <Input
              isRequired
              type="text"
              label="Ссылка на фото"
              className="max-w-xs elem"
              variant="bordered"
              defaultValue="0"
              value={photo}
              onValueChange={setphoto}
              />
            <Input
              className="elem"
              isRequired
              type="date" 
              label="Дата рождения" 
              variant="bordered"
              value={data_rojdenia}
              onValueChange={setdata_rojdenia}
            />
            <Input
              isRequired
              type="number"
              label="Кол-во детей"
              className="max-w-xs elem"
              variant="bordered"
              defaultValue="0"
              value={deti1}
              onValueChange={setdeti}
              />
              <Dropdown className="elem">
              <DropdownTrigger>
                <Button 
                  variant="bordered" 
                  className="capitalize"
                >
                  {selectedValuePodr}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                variant="flat"
                isRequired
                disallowEmptySelection
                selectionMode="single"
                // defaultSelectedKeys="мужской"
                selectedKeys={selectedKeysPodr}
                onSelectionChange={setSelectedKeysPodr}
              >
                <DropdownItem key="сотрудник нашего театра">сотрудник нашего театра</DropdownItem>
                <DropdownItem key="приглашенный сотрудник">приглашенный сотрудник</DropdownItem>
                <DropdownItem key="студент училища">студент училища</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="mini-container">
          <Input 
              isRequired
              type="date" 
              className="elem"
              label="Дата приема на работу" 
              variant="bordered"
              value={data_priema_na_rabotu}
              onValueChange={setdata_priema_na_rabotu}
            />
          <Input 
            className="elem"
              isRequired
              type="number" 
              label="Зарплата" 
              variant="bordered"
              value={zarplata1}
              onValueChange={setzarplata}
            />
            <Dropdown className="elem">
              <DropdownTrigger>
                <Button 
                  variant="bordered" 
                  className="capitalize"
                >
                  {selectedValueDolj}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
              isRequired
              className="elem"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                // defaultSelectedKeys="мужской"
                selectedKeys={selectedKeysDolj}
                onSelectionChange={setSelectedKeysDolj}
              >
                <DropdownItem key="актер">актер</DropdownItem>
                <DropdownItem key="музыкант">музыкант</DropdownItem>
                <DropdownItem key="постановщик">постановщик</DropdownItem>
                <DropdownItem key="служащий">служащий</DropdownItem>
                <DropdownItem key="директор">директор</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
          </div>
        </div>
        <Button className="rill" color="primary" type="submit" >Создать</Button>
      </div>
      }
    </form>
    
  );
}