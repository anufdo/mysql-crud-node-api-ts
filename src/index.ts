import cors from "cors";
import express, { Request, Response } from "express";
import { appEnv } from "./config/env";

const PORT = appEnv.general.PORT || 3000;

const app: express.Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

// test response - should be deleted.
app.get("/name", async (req: Request, res: Response): Promise<Response> => {
  return res.send("hi");
});

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error : ${error.message}`);
}
