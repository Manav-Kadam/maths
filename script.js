var playing = false;
var score;
var action;
var timeremaining;
var correct;

//if we click on start/reset
document.getElementById("startreset").onclick = 
function(){
  //if we are playing
  if(playing == true){   //if we are not playing
    location.reload();
  }
  else{
    playing = true;   //reload page
      score = 0;   //set score to 0
      document.getElementById("scorevalue").innerHTML = score;
      show("timeremaining");   //show countdown box
      document.getElementById("startreset").innerHTML = "Reset Game";
         timeremaining  = 60;
      
      document.getElementById("timeremainingvalue").innerHTML= timeremaining;
      hide("gameOver");
       startCountdown(); //start and end function call

       generateQA();
  }
}

//check answer
for(i=1;i<5;i++)
{
document.getElementById("box"+i).onclick = function(){
  if (playing == true) {

    if (this.innerHTML == correct) {
      score++;
      document.getElementById("scorevalue").innerHTML=score;
      show("correct");
      hide("wrong");
      setTimeout(function() {
         hide("correct")
      }, 1000);
      generateQA();
    }
    else{
      show("wrong");
      setTimeout(function() {
        hide("wrong")
     }, 1000);
    }
  }
}
}


//functions
     function startCountdown(){
      action = setInterval(function () {
        timeremaining -= 1;

        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining==0){
          stopCountdown();
          show("gameOver");
          
     
     document.getElementById("gameOver").innerHTML = "<br>GAME OVER! <br><br> Score : "+score;
     
     
     
          hide("correct");
     hide("wrong");
     hide("timeremaining")
     playing = false;
     document.getElementById("startreset").innerHTML = "Start Game";
        }
      }, 1000);
   } 
  
   function stopCountdown(){
     clearInterval(action);  //stop time after 0
   }

   function hide(ID){
     document.getElementById(ID).style.display = "none";
     
   }
function show(ID){
  document.getElementById(ID).style.display ="block";
}

   function generateQA() {
     var x =  1+ Math.round(Math.random()*9);
     var y =  1+ Math.round(Math.random()*9);
     correct = x*y;
     document.getElementById("question").innerHTML = x+"x"+y;
     var correctPos =  1+ Math.round(Math.random()*3);
     document.getElementById("box"+correctPos).innerHTML= correct;
 var answer = [correct]
     for(i=1;i<5;i++){
     if(i !=correctPos){
       var wrong;
       do{
        wrong = (1+ Math.round(Math.random()*9))*(1+ Math.round(Math.random()*9));
       }
       while(wrong == correct)
       
       document.getElementById("box"+i).innerHTML= wrong;
       answer.push(wrong);
     }
    }
   }
   