var score="70";

function calculateGrade(){
    switch(true){
        case score>=90:
        console.log("A GRADE");
        break;

        case score>=80:
        console.log("B GRADE");
        break;

        case score>=70:
        console.log("C GRADE");
        break;

        case score>=40:
        console.log("PASS");
        break;

        default:
            console.log("FAIL");
    }

}

calculateGrade();