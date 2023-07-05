import { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
dotenv.config();
const api_key = process.env.FAUCET_PAY_API || "";
const jwt_key = process.env.JWT_KEY || "";
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
  const prisma = new PrismaClient();
  const { amount, to, currency, referral } = req.body;
  const cookie = req.cookies;
  if (cookie == undefined) {
    return res.status(401).json({
      code: 401,
      message: "Unauthorized",
    });
  }
  const token = cookie.auth || "";
  const decodeCookie = jwt.decode(token) as { [key: string]: any };

  try {
    const getCurrency = await prisma.currency.findFirst({
      where: {
        id: parseInt(currency),
        is_exist: true,
      },
    });
    if (getCurrency == null) {
      return res.status(400).json({
        code: 400,
        message: "Currency not found",
      });
    }
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let bodyContent = new FormData();
    bodyContent.append("api_key", api_key);
    bodyContent.append("amount", amount);
    bodyContent.append("to", to);
    bodyContent.append("currency", getCurrency?.currency_code || "");
    bodyContent.append("referral", referral);

    let response = await fetch("https://faucetpay.io/api/v1/send", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    if (data.status == 200) {
      const insertData = await prisma.transaction_table.create({
        data: {
          amount: parseFloat(amount),
          to: to,
          current_balance: parseFloat(data.balance),
          currency_transaction_table_currencyTocurrency: {
            connect: { id: getCurrency.id },
          },
          status: data.status.toString(),
          payout_user_hash: data.payout_user_hash,
          referral: referral,
          payout_id: data.payout_id.toString(),
          users: { connect: { id: decodeCookie.user_id } },
        },
      });

      console.log(insertData);
      return res.status(200).json({
        code: 200,
        message: "Sending payment success",
        data: data,
      });
    } else {
      return res.status(400).json({
        code: 400,
        message: "Sending payment failed. Please try again.",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      code: 400,
      message: "Sending payment failed. Please try again.",
    });
  } finally {
    prisma.$disconnect();
  }
}
