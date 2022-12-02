import React from "react";

type SelectOptionsProps = {
  data: {
    uniqueid: number;
    polling_unit_name: string;
  }[];
};

export default function SelectOptions({ data }: SelectOptionsProps) {
  return (
    <>
      {data.map((unit) => {
        if (!unit.polling_unit_name) return null;
        return (
          <option key={unit.uniqueid} value={unit.uniqueid}>
            {unit.polling_unit_name}
          </option>
        );
      })}
    </>
  );
}
