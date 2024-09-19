import express, { Application } from "express";
import cors from "cors";
import routerFilosofo from "./routes/filosofoRoute";
import routerCientista from "./routes/cientistaRoute";
import routerHealthCheck from "./routes/healthCheck";
import routerCidade from "./routes/cidadeRoute";
import errorHandler from "./middleware/errorHandler";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/webmob", routerFilosofo);
app.use("/webmob", routerCientista);
app.use("/webmob", routerCidade);
app.use("/webmob", routerHealthCheck);

app.use(errorHandler);

export default app;
