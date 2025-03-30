import { Request, Response } from 'express';
import authRouter from './routes/auth';
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
