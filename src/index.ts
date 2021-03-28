import express from 'express';
import { shuffledTeamsRoute } from './app';

const app = express();
app.use(shuffledTeamsRoute);

app.listen(3000, () => {
  console.log('Listeningn on 3000 n');
});
