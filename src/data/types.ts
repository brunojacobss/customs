export enum Ranks {
  SuperGay = 3,
  Gay = 2,
  Caca = 1,
}

export interface Player {
  name: string;
  rank: Ranks;
}

export interface Team {
  name: string;
  players: Player[];
  totalRank: number;
}
