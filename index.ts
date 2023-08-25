import express, { Express } from "express";
import bodyParser from "body-parser";
import UserRouter from "./controllers/test.controller";
const app: Express = express();
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/test", UserRouter);

app.listen(3001, () => {
  console.log("App running on 3001 port");
});
