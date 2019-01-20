import {DBScores} from "./db-scores";

export interface DBPlayer {
  name: string;
  id: string;
  scores: DBScores[];
}
