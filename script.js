function gradeChecker(value) {
   
 var score = inp.value
 if (score>=70 && score<=100) {
    Result.innerHTML = "A-EXCELLENT✔"
    console.log("A-EXCELLENT");
    console.log(score);
 } else if(score>=60 && score<70){
    Result.innerHTML = "B-VeryGOOD👏"
    console.log("B-VeryGOOD");
    console.log(score);
 } else if(score>=50 && score<60){
    Result.innerHTML = "GOOD👍"
    console.log("C-GOOD");
    console.log(score);
 } else if(score>=45 && score<50){

    Result.innerHTML = "D-Pass🤦‍♂️"
    console.log("D-Pass");
    console.log(score);
} else if(score>=40 && score<45){
    Result.innerHTML = "E-Fair🤦‍♀️"
    console.log("E-Fair");
    console.log(score);
} else if(score>=0.01 && score<30){
    Result.innerHTML = "F-Fail😉"
    console.log("F-Fail");
    console.log(score);
} else {
   console.log(score);
   console.log("invalid");
   Result.innerHTML = "invalid"
}

}