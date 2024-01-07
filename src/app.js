import express from "express";
import morgan from "morgan";
//router
import languageRouters from "./routes/language.routes"

const app=express();

//settings
app.set("port", 34933);

//Middlewares intermediario 
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/language",languageRouters)

export default app;