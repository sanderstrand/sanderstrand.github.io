document.getElementById("svar1").onclick = function()
 {
  var radios = document.getElementsByName("q1");
  var i = 0, len = radios.length;
  var checked = false;
  var userAnswer;
  
  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  } 
  // hvis bruker ikke velger svar kommer beskjeden: "please select choice answer".
  if(!checked) {
    alert("please select choice answer");
    return;
  }
  // korrekt svar
  if(userAnswer === "A") {
     alert("Answer is correct!");
  }
  // feil svar
  else {
     alert("Answer is wrong!");
  }
  
} 




//denne slet jeg litt med, tuklet rundt med forksjellige løsninger, men det endte opp med at denne fungerte best. Det fungerer hvis du bare krysser av c og e eller bare d, men om du gjør det på alle blir det korrekt selv om det ikke er det.

document.getElementById("svar2").onclick = function()
 {
  var checkboxes = document.getElementsByName("q2");
  var i = 0, len = checkboxes.length;
  var checked = false;
  var userAnswer;  

 
   for( ; i < len; i++ ) {
     if(checkboxes[i].checked) {
       checked = true;
       userAnswer = checkboxes[i].value;
     }
  } 

  if(!checked) {
    alert("please select choice answer");
    return;
  }
 // Correct answer
  if(userAnswer === "c" ) {
     alert("Answer is correct!");
  }   
      if(userAnswer === "e" ) {
     alert("Answer is correct!");
  }   
         if(userAnswer === "d" ) {
     alert("Answer is wrong!");
  }  
 
} 
 





//bruker selectedIndex siden det er snakk om en dropdown liste.

document.getElementById("svar3").onclick = function(){
var answer=document.getElementById("hei");
if(answer[answer.selectedIndex].value=="sel2"){
alert("Thats correct"); 
 }
     else {
     alert("Answer is wrong!");
      }
}

//gjør til at om du skriver "loop" i tekstboksen blir svaret korrekt
document.getElementById("svar4").onclick = function(){
var textIn = document.getElementById("q5").value;
    
    
 if (textIn.toLowerCase() == "loop"){
  alert("Thats correct"); 
 }
    else {
     alert("Answer is wrong!");
      }
}
 
//stort sett det samme som den over bare at vi putter inn et tall istedenfor
document.getElementById("svar5").onclick = function(){
var numb = document.getElementById("f").value;
    
    
 if (numb.toLowerCase() == "5"){
  alert("Thats correct"); 
 }
    else {
     alert("Answer is wrong!");
      }
}
 




    
  


    
    

  