type Employee = {id:number, empName:string};
type Department = {department:string};
type BrowserName = {browser:string};

type Team= Employee & Department & BrowserName;

let team: Team = {id: 1003,empName: "Jabin", department: "QA", browser:"Chrome"};

console.log(team);