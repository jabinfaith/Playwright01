let a = 5;
let b = 6;

function add(){
    let sum = a+b;
    if(sum>10){
        return sum
    }else{
        return "check"
    }
}
let result = add();
console.log(result);

let browser="chrome";

function browserName(){
    switch(browser){
        case "chrome":
            console.log("launch chrome browser");
            break;


        case "safari":
            console.log("launch safari browser");
            break;

            case "IE":
                console.log("launch IE browser");
                break;   

    }
}

browserName();