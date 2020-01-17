import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisHtmlReport(team: string) {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  constructor(
    public analyzer: Analyzer, 
    public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
      const report = this.analyzer.run(matches);
      this.outputTarget.print(report);
    }
}
