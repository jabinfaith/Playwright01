

function prepareCoffee(callback:(coffee:string)=>void){
console.log("coffee is being prepared");

setTimeout(()=>{
    callback("Your coffee is ready");
},5000);

}

function onCoffeeReady(message:string){
    console.log(message);


}

prepareCoffee(onCoffeeReady);