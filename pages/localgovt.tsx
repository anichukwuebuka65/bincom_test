import Link from "next/link";
import React, { useState } from "react";
import { localGov } from "../backend/models/lgModel";
import LgaSelect from "../components/lgaSelect";
import SelectOptions from "../components/selectOptions";

function LocalGov({ localGovList }) {
  const [selected, setSelected] = useState("");
  const [totalScore, setTotalScore] = useState<number | null>(null);

  function handleChange(event: React.ChangeEvent) {
    setSelected(event.target.value);
  }

  async function handleSubmit(event) {
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
        <Link href={"/"} className="next_link" href={"/polling-unit"}>
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
