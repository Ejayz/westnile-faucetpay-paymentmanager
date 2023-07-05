import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).json({
      code: 405,
      message: "Invalid method. This endpoint only accept POST method",
    });
  }
  const { currency_name, currency_code } = req.body;
  const prisma = new PrismaClient();
  try {
    const addCurrency = await prisma.currency.create({
      data: {
        currency_name: currency_name,
        currency_code: currency_code,
        is_exist: true,
      },
    });
    return res.status(200).json({
      code: 200,
      message: "Successfully added currency",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      code: 400,
      message: "Failed to add currency",
    });
  } finally {
    prisma.$disconnect();
  }
}
