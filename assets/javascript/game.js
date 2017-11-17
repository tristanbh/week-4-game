$( document ).ready(function(){
  var Random = Math.floor(Math.random()*101+19)



   $("#random_number_child").text(Random);




var crys1= Math.floor(Math.random()*11+1)
var crys2= Math.floor(Math.random()*11+1)
var crys3= Math.floor(Math.random()*11+1)
var crys4= Math.floor(Math.random()*11+1)


let userTotal= 0; 
let wins= 0;
let losses = 0;


$('#page_wins').text(wins);
$('#page_losses').text(losses);


function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
  $('#random_number_child').text(Random);
  crys1= Math.floor(Math.random()*11+1);
  crys2= Math.floor(Math.random()*11+1);
  crys3= Math.floor(Math.random()*11+1);
  crys4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $('#finalTotal').text(userTotal);
} 



function pagewin(){
alert("You won!");
  wins++; 
  $("#page_wins").text(wins);
  reset();
}

function pageloss(){
alert ("You lose!");
  losses++;
  $('#page_losses').text(losses);
  reset()
}

  $('#crystal_1').on ('click', function(){
    userTotal = userTotal + crys1;
    console.log("userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      if (userTotal == Random){
        pagewin();
      }
      else if ( userTotal > Random){
        pageloss();
      }   
  })

  $('#crystal_2').on ('click', function(){
    userTotal = userTotal + crys2;
    console.log("userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      if (userTotal == Random){
        pagewin();
      }
      else if ( userTotal > Random){
        pageloss();
      } 
  })

  $('#crystal_3').on ('click', function(){
    userTotal = userTotal + crys3;
    console.log("userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
      if (userTotal == Random){
        pagewin();
      }
      else if ( userTotal > Random){
        pageloss();
      } 
  })

  $('#crystal_4').on ('click', function(){
    userTotal = userTotal + crys4;
    console.log(" userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);      
      if (userTotal == Random){
        pagewin();
      }
      else if ( userTotal > Random){
        pageloss();
      }
 }); 

});   


