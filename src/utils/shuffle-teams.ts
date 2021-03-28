import { Player, Team } from '../types';

const sortPlayers = (players: Player[]) => {
  players.sort((a, b) => b.rank - a.rank);
};
export const shuffleTeams = (teams: Team[], players: Player[]): Team[] => {
  sortPlayers(players);

  players.forEach((player) => {
    if (teams[0].totalRank < teams[1].totalRank) {
      teams[0].players.push(player);
      teams[0].totalRank += player.rank;
    } else {
      teams[1].players.push(player);
      teams[1].totalRank += player.rank;
    }
  });

  return teams;
};
