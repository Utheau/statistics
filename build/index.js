"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// declarations 
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisHtmlReport('Man United');
// calling related methods 
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
