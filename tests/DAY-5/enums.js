//enums - enumeration - set of named constants
//type of enums -
//numeric enums
var TestResult;
(function (TestResult) {
    TestResult[TestResult["Pass"] = 1] = "Pass";
    TestResult[TestResult["Fail"] = 2] = "Fail";
    TestResult[TestResult["Skip"] = 3] = "Skip";
})(TestResult || (TestResult = {}));
function logTestResult(testName, result) {
    console.log('Test:${testName}, Result Code:${result}');
}
logTestResult("login Test", TestResult.Pass);
logTestResult("Regression Test", TestResult.Fail);
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["Opened"] = 1] = "Opened";
    browserStatus["Closed"] = "closed";
    browserStatus[browserStatus["Crashed"] = 0] = "Crashed";
    browserStatus["Unknown"] = "unknown";
})(browserStatus || (browserStatus = {}));
function reportBrowserStatus(status) {
    console.log('Current browser status: ${status}');
}
reportBrowserStatus(browserStatus.Crashed);
