let browser="chrome";

function browsers(){
    if(browser=="chrome"){
       console.log("OPEN CHROME");
    }else{
        console.log("OPEN FF");

    }
}

browsers();


let testType="";

function test(){
    switch(testType){
        case "smoke":
            console.log("Test smoke");
            break;


        case "sanity":
            console.log("Test sanity");
            break;

            case "regression":
                console.log("Test regression");
                break;  
                
            default:
                console.log("Test smoke");

    }
}

test();