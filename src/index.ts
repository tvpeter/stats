import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
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


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


const wins = new WinsAnalysis('Chelsea');
const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport('chelseawins.html');

const summary = new Summary(wins, htmlReport);

summary.buildAndPrintReport(matchReader.matches);