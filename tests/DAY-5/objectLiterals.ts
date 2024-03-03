
//type stringorNumber =string|number;
let userProfile:{

    name: string;
    age : number;
email : string;
isActive:boolean;

}={

    name:"Jabin",
    age:40,
    email:'jabin@getMaxListeners.com',
    isActive:true

};

//how to access property values
// dot notation
//square notation

console.log(userProfile.name);
console.log(userProfile.email);
console.log(userProfile['isActive']);
console.log(userProfile['age']);


