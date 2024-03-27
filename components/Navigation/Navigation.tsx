'use client'
import React from "react";
import {Button, Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
import { MdPeopleAlt } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { GiTheaterCurtains } from "react-icons/gi";
import Link from "next/link";

type NavigationProps = {
    children: React.ReactNode;
  };

function Navigation({children}: NavigationProps) {
    
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Театр"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <div className="flex flex-row ">
      <ListboxWrapper>
        <Listbox 
          aria-label="Multiple selection example"
          variant="flat"
          
          selectionMode="single"
          
        >
          <ListboxItem key="Театр" startContent={<GiTheaterCurtains />} href="/" >Театр</ListboxItem>
          <ListboxItem key="Сотрудники" startContent={<MdPeopleAlt />} href="/employees">Сотрудники</ListboxItem>
          <ListboxItem key="Репертуар" startContent={<IoLibrary />} href="/repertoire">Репертуар</ListboxItem>
          <ListboxItem key="Показы" startContent={<FaMasksTheater />} href="/show">Показы</ListboxItem>
        </Listbox>
        <div className="flex mx-auto">
        <Link href={"/addData"}><Button color="primary" fullWidth={true}>Добавить данные</Button></Link>
        </div>
      </ListboxWrapper>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Navigation;