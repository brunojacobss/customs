import express from 'express';
import { shuffledTeamsRoute } from './routes/randomize-teams';

const app = express();
app.use(shuffledTeamsRoute);

export { app };
