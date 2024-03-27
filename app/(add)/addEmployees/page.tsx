"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import React, { useState, useMemo, useEffect } from "react";
import "./addEmpl.css";
import { Pol } from "@prisma/client";
import { EmployeeData } from "@/models/Employee";

type Mappings = {
  [key: string]: number;
};

const podrazdelenieMappings = {
  "сотрудник нашего театра": 1,
  "приглашенный сотрудник": 2,
  "студент училища": 3,
};

const doljnolstMappings = {
  актер: 1,
  музыкант: 2,
  постановщик: 3,
  служащий: 4,
  директор: 5,
};

const getIdFromSelectedKeys = (
  selectedKeys: Set<string>,
  mappings: Mappings,
): number | null => {
  for (const key of selectedKeys) {
    if (Object.prototype.hasOwnProperty.call(mappings, key)) {
      return mappings[key];
    }
  }
  return null;
};

export default function Add() {
  const [selectedPol, setSelectedPol] = useState(new Set(["Пол:"]));

  const [selectedKeysDolj, setSelectedKeysDolj] = useState(
    new Set(["Должность:"]),
  );
  const [selectedKeysPodr, setSelectedKeysPodr] = useState(
    new Set(["Подразделение:"]),
  );

  const selectedPolValue = useMemo(() => {
    if (selectedPol.size === 1 && selectedPol.has("Пол:")) {
      return "Выберите пол";
    }

    if (selectedPol.has(Pol.FEMALE)) {
      return "Женский пол";
    }

    return "Мужской пол";
  }, [selectedPol]);

  const selectedValueDolj = useMemo(
    () => Array.from(selectedKeysDolj).join(", ").replaceAll("_", " "),
    [selectedKeysDolj],
  );
  const selectedValuePodr = useMemo(
    () => Array.from(selectedKeysPodr).join(", ").replaceAll("_", " "),
    [selectedKeysPodr],
  );

  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    last_name: "",
    first_name: "",
    middle_name: "",
    data_rojdenia: "",
    deti: 0,
    data_priema_na_rabotu: "",
    zarplata: 0,
    photo: "",
    pol: "",
    podrazdelenieId: null,
    doljnolstId: null,
  });

  const HandleSumbit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      await fetch("api/addEmpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });
    } catch (error) {
      console.log(JSON.stringify(employeeData));
      console.error(error);
    }
  };

  const handleChange = (
    fieldName: keyof EmployeeData,
    value: string | number | Pol,
  ) => {
    setEmployeeData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    // Предполагая, что Set всегда содержит один элемент
    const pol: string = selectedPol.values().next().value;
    handleChange("pol", pol);
  }, [selectedPol]);

  useEffect(() => {
    const podrazdelenieId = getIdFromSelectedKeys(
      selectedKeysPodr,
      podrazdelenieMappings,
    );
    if (!podrazdelenieId) {
      return;
    }
    handleChange("podrazdelenieId", podrazdelenieId);
  }, [selectedKeysPodr]);

  useEffect(() => {
    const doljnolstId = getIdFromSelectedKeys(
      selectedKeysDolj,
      doljnolstMappings,
    );
    if (!doljnolstId) {
      return;
    }
    handleChange("doljnolstId", doljnolstId);
  }, [selectedKeysDolj]);

  return (
    <form onSubmit={HandleSumbit}>
      {
        <div>
          <p className="text-40 px-10 py-5 font-bold leading-6 text-black">
            Добавить сотрудника
          </p>
          <div className="container">
            <div className="mini-container">
              <Input
                isRequired
                type="text"
                label="Имя"
                className="elem max-w-xs"
                variant="bordered"
                value={employeeData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
              />
              <Input
                isRequired
                type="text"
                label="Фамилия"
                className="elem max-w-xs"
                variant="bordered"
                value={employeeData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
              />
              <Input
                type="text"
                label="Отчество"
                className="elem max-w-xs"
                variant="bordered"
                value={employeeData.middle_name}
                onChange={(e) => handleChange("middle_name", e.target.value)}
              />
              <Dropdown className="elem">
                <DropdownTrigger>
                  <Button variant="bordered" className="capitalize">
                    {selectedPolValue}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Выберите пол"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedPol}
                  onSelectionChange={(keys) =>
                    setSelectedPol(keys as Set<string>)
                  }
                >
                  <DropdownItem key={Pol.MALE}>мужской пол</DropdownItem>
                  <DropdownItem key={Pol.FEMALE}>женский пол</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            <div className="mini-container">
              <Input
                isRequired
                type="text"
                label="Ссылка на фото"
                className="elem max-w-xs"
                variant="bordered"
                defaultValue="0"
                value={employeeData.photo}
                onChange={(e) => handleChange("photo", e.target.value)}
              />
              <Input
                className="elem"
                isRequired
                type="date"
                label="Дата рождения"
                variant="bordered"
                value={employeeData.data_rojdenia}
                onChange={(e) => handleChange("data_rojdenia", e.target.value)}
              />
              <Input
                isRequired
                type="number"
                label="Кол-во детей"
                className="elem max-w-xs"
                variant="bordered"
                defaultValue="0"
                value={employeeData.deti.toString()}
                onChange={(e) => handleChange("deti", e.target.value)}
              />
              <Dropdown className="elem">
                <DropdownTrigger>
                  <Button variant="bordered" className="capitalize">
                    {selectedValuePodr}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Выберите подразделение"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeysPodr}
                  onSelectionChange={(keys) =>
                    setSelectedKeysPodr(keys as Set<string>)
                  }
                >
                  <DropdownItem key="сотрудник нашего театра">
                    сотрудник нашего театра
                  </DropdownItem>
                  <DropdownItem key="приглашенный сотрудник">
                    приглашенный сотрудник
                  </DropdownItem>
                  <DropdownItem key="студент училища">
                    студент училища
                  </DropdownItem>
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
                value={employeeData.data_priema_na_rabotu}
                onChange={(e) =>
                  handleChange("data_priema_na_rabotu", e.target.value)
                }
              />
              <Input
                className="elem"
                isRequired
                type="number"
                label="Зарплата"
                variant="bordered"
                value={employeeData.zarplata.toString()}
                onChange={(e) => handleChange("zarplata", e.target.value)}
              />
              <Dropdown className="elem">
                <DropdownTrigger>
                  <Button variant="bordered" className="capitalize">
                    {selectedValueDolj}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Выберите должность"
                  className="elem"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeysDolj}
                  onSelectionChange={(keys) =>
                    setSelectedKeysDolj(keys as Set<string>)
                  }
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
          <Button className="rill" color="primary" type="submit">
            Создать
          </Button>
        </div>
      }
    </form>
  );
}
