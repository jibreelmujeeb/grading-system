function gradeChecker(value) {
   
 var score = inp.value
 var song1 = new Audio("audio/clap.wav")
 var song2 = new Audio("audio/defend.mp3")
 var song3 = new Audio("audio/No Evidence.mp3")
 var song4 = new Audio("audio/play.mp3")
 var song5 = new Audio("audio/pity.mp3")
 var song6 = new Audio("audio/make.mp3")
 if (score>=70 && score<=100) {
    Result.innerHTML = "A-EXCELLENT✔"
    console.log("A-EXCELLENT");
    song1.play()
    console.log(score);
 } else if(score>=60 && score<70){
    Result.innerHTML = "B-VeryGOOD👏"
    console.log("B-VeryGOOD");
    song2.play()
    console.log(score);
 } else if(score>=50 && score<60){
    Result.innerHTML = "GOOD👍"
    console.log("C-GOOD");
    song3.play();
    console.log(score);
 } else if(score>=40 && score<50){

    Result.innerHTML = "D-Pass🤦‍♂️"
    console.log("D-Pass");
    song4.play()
    console.log(score);
} else if(score>=25 && score<40){
    Result.innerHTML = "E-Fair🤦‍♀️"
    console.log("E-Fair");
    song5.play();
    console.log(score);
} else if(score>=0 && score<25){
    Result.innerHTML = "F-Fail😉"
    console.log("F-Fail");
    song6.play();
    console.log(score);
} else {
   console.log(score);
   console.log("invalid");
   Result.innerHTML = "invalid"
}
inp.value = ""

}