import express, { Application } from "express";
import cors from "cors";
import routerUsuario from "./routes/filosofoRoute";
import routerTournament from "./routes/healthCheck";
import routerMatch from "./routes/matchRoute";
import errorHandler from "./middleware/errorHandler";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/webmob", routerUsuario);
app.use("/webmob", routerTournament);
app.use("/webmob", routerMatch);

app.use(errorHandler);

export default app;
