import express, { urlencoded, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import eventRoutes from './routes/event.router';

const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', eventRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
