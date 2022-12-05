import React from "react";

type SelectOptionsProps = {
  data: {
    lga_name: string;
    lga_id: number;
  }[];
};

export default function LgaSelect({ data }: SelectOptionsProps) {
  return (
    <>
      {data.map((unit) => {
        if (!unit.lga_name) return null;
        return (
          <option key={unit.lga_id} value={unit.lga_id}>
            {unit.lga_name}
          </option>
        );
      })}
    </>
  );
}
