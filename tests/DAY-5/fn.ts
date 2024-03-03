type browserNames = "Chrome"|"FireFox"|"Edge";
//type browserVersions = 110|100|105;

type browserDetails =  browserNames 
//& browserVersions;

function invokeBrowser(browser:browserDetails):void{

    if(browser=="Chrome"){

        console.log("CHROME LOGIN");
    
    }else{

        console.log("FF LOGIN");

            }
        }

        invokeBrowser("Edge");