import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method !== "GET") {
    return res.status(405).json({
      code: 405,
      message: "Invalid method. This endpoint only accept GET method",
    });
  }
  const prisma = new PrismaClient();
  try {
    const getCurrency = await prisma.currency.findMany({
      where: {
        is_exist: true,
      },
      select: {
        id: true,
        currency_name: true,
        currency_code: true,
      },
    });
    return res.status(200).json({
      code: 200,
      message: "Success",
      data: getCurrency,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  } finally {
    prisma.$disconnect();
  }
}
