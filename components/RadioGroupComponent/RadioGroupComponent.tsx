import React from "react";
import { Radio, RadioGroup } from "@nextui-org/react";

interface RadioGroupComponentProps {
  onChange: (value: string) => void;
}

function RadioGroupComponent({ onChange }: RadioGroupComponentProps) {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <RadioGroup
      label="Сотрудники:"
      orientation="horizontal"
      color="primary"
      defaultValue="alls"
      onChange={handleRadioChange}
    >
      <Radio value="alls">Все</Radio>
      <Radio value="nashi">Нашего театра</Radio>
      <Radio value="prigshenie">Приглашенные</Radio>
      <Radio value="students">Студенты училища</Radio>
    </RadioGroup>
  );
}

export default RadioGroupComponent;
