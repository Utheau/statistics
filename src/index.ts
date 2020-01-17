import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// declarations 
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisHtmlReport('Man United');

// calling related methods 
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);