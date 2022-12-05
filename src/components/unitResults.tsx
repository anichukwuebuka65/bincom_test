type UnitResultsProps = {
  results: {
    party_abbreviation: string;
    party_score: string;
  }[];
};

export default function UnitResults({ results }: UnitResultsProps) {
  return (
    <div className="results">
      <h2>
        <span>PARTY</span>
        <span>SCORE</span>
      </h2>
      {results.map((data) => (
        <p className="results_data" key={data.party_score}>
          <span>{data.party_abbreviation}</span>
          <span>{data.party_score}</span>
        </p>
      ))}
    </div>
  );
}
