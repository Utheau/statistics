//import { MatchReader } from './inheritance/MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUniWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUniWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUniWins++;
  }
}

console.log(`Man United won ${manUniWins} games`);