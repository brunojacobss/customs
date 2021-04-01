import express from 'express';
import { shuffledTeamsRoute } from './routes/randomize-teams';

const app = express();
app.use(express.json());
app.use(shuffledTeamsRoute);

export { app };
