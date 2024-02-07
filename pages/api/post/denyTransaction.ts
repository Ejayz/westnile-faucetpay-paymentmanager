import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
dotenv.config();
const api_key = process.env.FAUCET_PAY_API || "";
const jwt_key = process.env.JWT_KEY || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      code: 405,
      message: "Invalid method. This endpoint only accept POST method",
    });
  }
  const cookie = req.cookies;
  if (cookie == undefined) {
    return res.status(401).json({
      code: 401,
      message: "Unauthorized",
    });
  }
  const token = cookie.auth || "";
  const decodeCookie = jwt.decode(token) as { [key: string]: any };
  console.log(req.body);
  const { transactionId, status, to_user } = req.body;
  console.log(transactionId);
  const prisma = new PrismaClient();
  try {
    const verify = jwt.verify(token, jwt_key);
    if (typeof verify == "string") {
      return res.status(401).json({
        code: 401,
        message: "Unauthorized",
      });
    }
    const updateTransaction = await prisma.transaction_table.update({
      where: {
        id: transactionId,
      },
      data: {
        status: "201",
      },
    });
    if (updateTransaction) {
      return res.status(200).json({
        code: 200,
        message: "Transaction denied",
      });
    }
    return res.status(400).json({
      code: 400,
      message: "Invalid transaction",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ code: 500, message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
