import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(process.env.PORT, () => {
  console.log(`Server listen at ${process.env.BASE_URL}:${process.env.PORT} 🚀️`);
});
