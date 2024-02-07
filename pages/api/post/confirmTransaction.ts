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
    const transaction = await prisma.transaction_table.findFirst({
      where: {
        id: transactionId,
        status: status,
        to_user: to_user,
      },
      include: {
        currency_transaction_table_currencyTocurrency: true,
      },
    });
    console.log(transaction)
    if (transaction) {
      if (
        transaction.amount == null ||
        transaction.to_user == null ||
        transaction.referral == null
      ) {
        return res
          .status(400)
          .json({ code: 400, message: "Invalid transaction" });
      }

      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      };

      let bodyContent = new FormData();
      bodyContent.append("api_key", api_key);
      bodyContent.append("amount", transaction.amount.toString());
      bodyContent.append("to", transaction.to_user);
      bodyContent.append(
        "currency",
        transaction.currency_transaction_table_currencyTocurrency
          ?.currency_code || ""
      );
      bodyContent.append("referral", transaction.referral.valueOf().toString());

      let response = await fetch("https://faucetpay.io/api/v1/send", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.json();
      if (data.status == 200) {
        const insertData = await prisma.transaction_table.update({
          where: {
            id: transaction.id,
          },
          data: {
            current_balance: parseFloat(data.balance),
            status: data.status.toString(),
            payout_user_hash: data.payout_user_hash,
            payout_id: data.payout_id.toString(),
            users: { connect: { id: decodeCookie.user_id } },
          },
        });
        console.log(insertData);
        return res.status(200).json({
          code: 200,
          message:
            "Transaction sent. Please check faucet pay account if credited . Thank you",
        });
      } else {
        return res.status(400).json({ code: 400, message: data.message });
      }
    } else {
      return res
        .status(404)
        .json({ code: 404, message: "Transaction not found" });
    }
  } catch (e: any) {
    console.log(e);
    return res.status(400).json({ code: 400, message: e });
  } finally {
    prisma.$disconnect();
  }
}
