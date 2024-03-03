//enums - enumeration - set of named constants
//type of enums -
//numeric enums

enum TestResult {

    Pass=1,
    Fail,
    Skip
}

function logTestResult(testName:string, result:TestResult){

    console.log('Test:${testName}, Result Code:${result}');
}
logTestResult("login Test", TestResult.Pass);
logTestResult("Regression Test", TestResult.Fail);

enum browserStatus{
    Opened=1,
    Closed="closed",
    Crashed=0,
    Unknown="unknown"
}
function reportBrowserStatus(status: browserStatus){
console.log('Current browser status: ${status}');
}
reportBrowserStatus(browserStatus.Crashed);
