import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server listen at ${process.env.BASE_URL}:${process.env.PORT} 🚀️`);
});
