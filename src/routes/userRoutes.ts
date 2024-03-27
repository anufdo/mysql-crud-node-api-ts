// routes/userRoutes.ts

import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import _ from "lodash";

// Assuming your User model is exported as User from the modes directory

const router = express.Router();
const JWT_SECRET = "your_secret_key"; // Change this to a secure secret key

router.get("/test", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json(_.pick(user, ["id", "username"]));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ user: { id: user.id, username: user.username } }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// // Example protected route
// router.get("/profile", authenticateJWT, (req: Request, res: Response) => {
//   res.json({ user: req.user });
// });

// // Middleware for JWT authentication
// function authenticateJWT(req: Request, res: Response, next: () => void) {
//   const token = req.headers.authorization;
//   if (token) {
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ message: "Failed to authenticate token." });
//       } else {
//         req.user = decoded.user;
//         next();
//       }
//     });
//   } else {
//     res.status(401).json({ message: "Token is required." });
//   }
// }

export default router;
