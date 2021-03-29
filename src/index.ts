import express from 'express';
import { shuffledTeamsRoute } from './app';

const app = express();
app.use(shuffledTeamsRoute);

app.listen(3001, () => {
  console.log('Check out port 3001');
});
