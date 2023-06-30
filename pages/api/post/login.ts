import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dotenv.config();
  const JWT_KEY = process.env.JWT_KEY || "";
  const { username, password } = req.body;
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).json({
      code: 405,
      message: "Invalid method. This endpoint only accept POST method",
    });
  }
  if (username == "" && password == "") {
    return res
      .status(400)
      .json({ code: 400, message: "Username and password required" });
  } else {
    const prisma = new PrismaClient();
    try {
      const user = await prisma.users.findFirstOrThrow({
        where: {
          username: username,
        },
      });

      const dBpassword = user.password || "";
      const isValid = await bcrypt.compare(password, dBpassword);
      if (isValid) {
        const token = jwt.sign({ username: username }, JWT_KEY);
        res.setHeader("Set-Cookie", `auth=${token}; path=/; max-age=2592000;`);

        return res.status(200).json({ code: 200, message: "Login success" });
      } else {
        return res
          .status(400)
          .json({ code: 400, message: "Password incorrect" });
      }
    } catch (e) {
      return res.status(400).json({ code: 400, message: "User not found" });
    }
  }
}
