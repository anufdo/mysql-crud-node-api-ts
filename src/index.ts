import express, { Request, Response } from "express";

const PORT = 3000;

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

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
