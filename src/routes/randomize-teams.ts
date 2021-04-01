import router, { Request, Response } from 'express';
import { players } from '../data/players';
import { shuffleTeams } from '../utils/shuffle-teams';

const routes = router();

routes.get('/api/randomize-teams', (req: Request, res: Response) => {
  const teams = [
    { name: 'DarkestDungeoners', players: [], totalRank: 0 },
    { name: 'Factoriers', players: [], totalRank: 0 },
  ];
  const shuffledTeams = shuffleTeams(teams.slice(), players.slice());

  res.send(shuffledTeams);
});

export { routes as shuffledTeamsRoute };
