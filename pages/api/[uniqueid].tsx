// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PollingUnit } from "../../src/backend/models/PollingUnit";
import { PuResult } from "../../src/backend/models/puResults";

PollingUnit.hasMany(PuResult);
PuResult.belongsTo(PollingUnit, {
  foreignKey: {
    name: "polling_unit_uniqueid",
  },
});

type Data = {
  query: {};
};

async function FindUnit(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req);
  const { query } = req;
  const pollUnit = await PollingUnit.findOne({
    raw: true,
    where: {
      uniqueid: parseInt(query.uniqueid),
    },
  });

  const UnitResults = await PuResult.findAll({
    where: {
      polling_unit_uniqueid: pollUnit.uniqueid,
    },
    attributes: ["polling_unit_uniqueid", "party_abbreviation", "party_score"],
  });

  res.status(200).json(UnitResults);
}

export default FindUnit;
