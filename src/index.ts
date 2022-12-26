import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//inheritance
// const reader = new MatchReader('football.csv');
// reader.read();

/**
// create an object that satisfies the 'DataReader' interface
let csvFileReader = new CsvFileReader('football.csv');

//create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
**/

// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsvReader('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport(
  'Chelsea',
  'chelseawinsreport.html'
);
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
