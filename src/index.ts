import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';


const reader = new CsvFileReader('football.csv');
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