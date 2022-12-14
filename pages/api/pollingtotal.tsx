import type { NextApiRequest, NextApiResponse } from "next";
import { PollingUnit } from "../../src/backend/models/PollingUnit";
import { PuResult } from "../../src/backend/models/puResults";

type Data = {};

export default async function GetTotalScore(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  if (!query.query) res.send("no query params");
  res.status(200).json({ total_score: "60" });

  // const lga = await PollingUnit.findAll({
  //   raw: true,
  //   where: {
  //     lga_id: query.query,
  //   },
  //   attributes: ["polling_unit_id"],
  // });

  // const newArr = lga.map((item) => item.polling_unit_id);

  // const totalScore = await PuResult.findAll({
  //   raw: true,
  //   where: {
  //     polling_unit_uniqueid: newArr,
  //   },
  //   attributes: ["party_score"],
  // });

  // let sum = 0;
  // for (let i = 0; i < totalScore.length; i++) {
  //   sum = sum + totalScore[i].party_score;
  // }

  // res.status(200).json({ total_score: sum });
}
