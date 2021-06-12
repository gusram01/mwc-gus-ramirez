import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_: Request, res: Response) => {
  res.send('Hellooouuu');
});

app.listen(3000, () => {
  console.log('Listen server');
});
