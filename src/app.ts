import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import empresaRouter from './routes/empresaRouter';
import logger from './middleware/logger';
import { env } from "./config/env";
import { errorHandler } from "./middleware/errorHandler"; 

const app = express();

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(logger);
app.use(express.json());

app.use('/empresa', empresaRouter);

app.get("/teste-erro", () => {
  throw new Error("Erro proposital!");
});

// MIDDLEWARE GLOBAL (DEVE SER O ÚLTIMO)
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${env.PORT}`);
});
