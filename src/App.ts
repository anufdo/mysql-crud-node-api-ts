import cors from "cors";
import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";

const app: express.Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

// test response - should be deleted.
app.get("/name", async (req: Request, res: Response): Promise<Response> => {
  return res.send("hi");
});

app.get("/api/name", async (req: Request, res: Response): Promise<Response> => {
  return res.send("hi hello");
});

export default app;
