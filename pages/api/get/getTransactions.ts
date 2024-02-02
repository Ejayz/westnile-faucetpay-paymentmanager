import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      code: 405,
      message: "Invalid method. This endpoint only accept GET method",
    });
  }
  const prisma = new PrismaClient();
  try {
    const transactions = await prisma.transaction_table.findMany({
      include: {
        currency_transaction_table_currencyTocurrency: true,
      },
      skip:0,
      take:15,
    });

    return res.status(200).json({ code: 200, data: transactions });
  } catch (e) {
    return res.status(400).json({ code: 400, message: e.message });
  } finally {
    prisma.$disconnect();
  }
}
