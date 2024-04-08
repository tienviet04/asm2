import express from "express";
import routers from "./routes";
import connectMongoDB from "./config/dbconfig";
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// create db_nodejs in MongoDB
const dbUrl = "mongodb://127.0.0.1:27017/db_asm2"
connectMongoDB(dbUrl);
app.use("/", routers)
export const viteNodeApp = app;
