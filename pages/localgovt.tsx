import Link from "next/link";
import React, { useState } from "react";
import { localGov } from "../src/backend/models/lgModel";
import LgaSelect from "../src/components/lgaSelect";
import SelectOptions from "../src/components/selectOptions";

type localGovProps = {
  localGovList: {
    lga_name: string;
    lga_id: string;
  }[];
};

function LocalGov({ localGovList }: localGovProps) {
  const [selected, setSelected] = useState(localGovList[0].lga_id);
  const [totalScore, setTotalScore] = useState<number | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(event.currentTarget.value);
  }
  async function handleSubmit(event: React.FormEvent) {
    try {
      event.preventDefault();
      const data = await fetch(`/api/pollingtotal?query=${selected}`);
      const resultTotal = await data.json();
      console.log(resultTotal);
      setTotalScore(resultTotal.total_score);
    } catch (error) {}
  }

  return (
    <main>
      <h1>LOCAL GOVERNMENTS AND RESULTS </h1>
      <form onSubmit={handleSubmit}>
        <select value={selected} onChange={handleChange}>
          <LgaSelect data={localGovList} />
        </select>
        <button className="btn" type="submit">
          find
        </button>
      </form>
      <p className="form_data">{totalScore}</p>
      <div className="container">
        <Link href={"/"} className="next_link">
          Get results for polling units
        </Link>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const results = await localGov.findAll();

  return {
    props: {
      localGovList: JSON.parse(JSON.stringify(results)),
    },
  };
}

export default LocalGov;
