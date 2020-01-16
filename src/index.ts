import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';


const reader = new MatchReader('football.csv');
reader.read();

let manUniWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUniWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUniWins++;
  }
}

console.log(`Man United won ${manUniWins} games`);