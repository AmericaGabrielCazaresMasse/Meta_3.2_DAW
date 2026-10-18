import express from 'express';
import cors from 'cors';
import auxiliaresRoutes from './routes/auxiliares.routes.js';
import jugadoresRoutes from './routes/jugadores.routes.js';
import rostersRoutes from './routes/rosters.routes.js';
import { notFoundHandler, errorHandler } from './middlewares/errorHandler.js';
import { swaggerServe, swaggerSetup } from './docs/swagger.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerServe, swaggerSetup);
app.use('/api/v1', auxiliaresRoutes);
app.use('/api/v1/jugadores', jugadoresRoutes);
app.use('/api/v1/rosters', rostersRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;