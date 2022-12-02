// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PollingUnit } from "../../backend/models/PollingUnit";

type Data = {
  result: {};
  length: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await PollingUnit.findAll({
    attributes: ["polling_unit_name"],
  });
  res.status(200).json({ length: result.length, result });
}
