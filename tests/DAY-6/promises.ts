/**
 * 1. Pending - operation is still ongoing
 * 2. Fulfilled - The operation completed successfully
 * 3. Rejected - The operation failed 
 * 
 */

//import { rejects } from "assert";
//import { log } from "console";
//import { resolve } from "path";

function prepareCoffee():Promise<string>{
    console.log("Coffee is being prepared");
    return new Promise((resolve,reject) => {

        setTimeout(()=>{
            resolve("Your coffee is ready");
        },5000);

    });

}

prepareCoffee().then((message)=>{ //handles the fullfilled state
    console.log(message);
}).catch((error)=>{    //handles rejected state
    console.error(error);
})