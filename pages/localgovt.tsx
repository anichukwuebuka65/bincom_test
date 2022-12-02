import Link from "next/link";
import React, { useState } from "react";
import { localGov } from "../backend/models/lgModel";
import LgaSelect from "../components/lgaSelect";
import SelectOptions from "../components/selectOptions";

type localGovProps = {
  localGovList: {
    lga_name: string;
    lga_id: number;
  }[];
};

function LocalGov({ localGovList }: localGovProps) {
  const [selected, setSelected] = useState("");
  const [totalScore, setTotalScore] = useState<number | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(event.currentTarget.value);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const data = await fetch(`/api/pollingtotal?query=${selected}`);
    const resultTotal = await data.json();
    setTotalScore(resultTotal.total_score);
    console.log(resultTotal.total_score);
  }

  return (
    <main>
      <h1>LOCAL GOVERNMENTS AND RESULTS</h1>
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
