import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

//Import custom modules
import { userRoute } from "./routes/user.router";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const options: cors.CorsOptions = {
  //origin: process.env.ALLOWED_ORIGINS?.split(","),
  origin: "*",
};

app.use(cors(options));
app.use("/user", userRoute);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
