import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method !== "POST") {
    return res.status(405).json({
      code: 405,
      message: "Invalid method. This endpoint only accept POST method",
    });
  }
  const { password, newpassword } = req.body;
  const cookie = req.cookies;
  if (cookie == undefined) {
    return res.status(401).json({
      code: 401,
      message: "Unauthorized",
    });
  }
  const token = cookie.auth || "";
  const decodeCookie = jwt.decode(token) as { [key: string]: any };

  const prisma = new PrismaClient();
  try {
    const user = await prisma.users.findFirstOrThrow({
      where: {
        id: decodeCookie.user_id,
      },
    });
    const dBpassword = user.password || "";
    const isValid = await bcrypt.compare(password, dBpassword);
    if (isValid) {
      const hashed = await generateHased(newpassword);
      await prisma.users.update({
        where: {
          id: decodeCookie.user_id,
        },
        data: {
          password: hashed,
        },
      });
      return res.status(200).json({ code: 200, message: "Password changed" });
    }
    return res.status(400).json({ code: 400, message: "Password incorrect" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ code: 400, message: "User not found" });
  } finally {
    prisma.$disconnect();
  }
}

async function generateHased(password: string) {
  const salt = await bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
