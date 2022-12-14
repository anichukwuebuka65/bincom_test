import Link from "next/link";
import React, { useState } from "react";
import { PollingUnit as Unit } from "../src/backend/models/PollingUnit";
import SelectOptions from "../src/components/selectOptions";
import UnitResults from "../src/components/unitResults";

type PollingUnitProps = {
  unitNames: {
    uniqueid: string;
    polling_unit_name: string;
  }[];
};

function PollingUnit({ unitNames }: PollingUnitProps) {
  const [selectedUnit, setSelectedUnit] = useState(unitNames[0].uniqueid);
  const [unitResults, setUnitResults] = useState([]);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedUnit(event.currentTarget.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const data = await fetch(`api/${selectedUnit}`);
      const result = await data.json();
      setUnitResults(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1 className="header">INEC PORTAL FOR DELTA STATE</h1>
      <div>
        <h2>Find the results of a polling unit</h2>
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange} value={selectedUnit}>
            <SelectOptions data={unitNames} />
          </select>
          <button className="btn" type="submit">
            Find
          </button>
        </form>
      </div>
      <section>
        <UnitResults results={unitResults} />
      </section>
      <div className="container">
        <Link className="next_link" href={"/localgovt"}>
          Get total score for each L.G.A
        </Link>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const result = await Unit.findAll({
    raw: true,
    attributes: ["uniqueid", "polling_unit_name"],
  });

  return {
    props: {
      unitNames: result,
    },
  };
}

export default PollingUnit;
