//var -- declare any type of value
//Let -- declare any type of value
//const -- declare any type of value -- cannot be changed

var firstName="jabin";
console.log(firstName);

var firstName="faith";
console.log(firstName);

//var -- redeclare the variable and reassign the value -- not safe
//In ES6 -- Let replaces var keyword
//restricition of re-declaration, but reassigning is possible
//scope of the variable - global - local
//hoisting

let fName="jabin";
console.log(fName);

fName="faith";
console.log(fName);

let username="RAJA"
function userDetails(username){
    let userId=1234;
if(username.startsWith("RAJA")){
    var pwd="1111";
    console.log(username);
}else{
    console.log("Check");

}
console.log(userId);
console.log(pwd);
}
userDetails(username);

