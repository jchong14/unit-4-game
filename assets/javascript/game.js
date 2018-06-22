// Generates the random number to guess once the screen is loaded
var random=Math.floor(Math.random()*101+19)

// Display random number
$('#randomnumber').text(random);

//Generates random number for each crystal
var crystal1= Math.ceil(Math.random()*12);
$('#button1').attr('data-num', crystal1);
var crystal2= Math.ceil(Math.random()*12);
$('#button2').attr('data-num', crystal2);
var crystal3= Math.ceil(Math.random()*12);
$('#button3').attr('data-num', crystal3);
var crystal4= Math.ceil(Math.random()*12);
$('#button4').attr('data-num', crystal4);
//variables for score, wints, and losses
var totalScore= 0; 
var wints= 0;
var losses = 0;

//attaches to wints and losses
$('#wins').text(wints);
$('#losses').text(losses);
$('#totalscore').text(totalScore);

//created a function to reset the game and put it at the bottom of each "if" statement
function resetGame(){
    random=Math.floor(Math.random()*101+19);
    $('#randomnumber').text(random);
    crystal1= Math.ceil(Math.random()*12);
    crystal2= Math.ceil(Math.random()*12);
    crystal3= Math.ceil(Math.random()*12);
    crystal4= Math.ceil(Math.random()*12);
    totalScore= 0;
    $('#totalscore').text(totalScore);
    } 

$(document).on('click', 'button', function() {
    var button = $(this);
    button = $(this).data("num");
    totalScore = button + totalScore;
    $('#totalscore').text(totalScore);

 if (totalScore == random) {
    alert ("You won!");
    wints++;
    $('#wins').text(wints);
    resetGame();
 }   
 else if (totalScore > random) {
    alert ("You lost!");
    losses++;
    $('#losses').text(losses);
    resetGame();
 }
})
//when you click on the crystal, it adds the value to the total score.
// $('button').on ('click', function(){
//     totalScore = totalScore + button;
//     $('#totalscore').text(totalScore);
    
//     if (totalScore == random) {
//         wints++;
//         $('#wins').text(wints);
//         totalScore= 0; 
//         alert ("You won!");
//     }
    
//     else if (totalScore > random) {
//         losses++;
//         $('#losses').text(losses);
//         totalScore= 0; 
//         alert ("You lost!");
//     }
// })  

// $('#image2').on ('click', function(){
//     totalScore = totalScore + crystal2;
//     $('#totalscore').text(totalScore); 
//     if (totalScore == random) {
//         wints++;
//         $('#wins').text(wints);
//         totalScore= 0; 
//         alert ("You won!");
//     }
    
//     else if (totalScore > random) {
//         losses++;
//         $('#losses').text(losses);
//         totalScore= 0; 
//         alert ("You lost!");
//     }
// })  

// $('#image3').on ('click', function(){
//     totalScore = totalScore + crystal3;
//     $('#totalscore').text(totalScore);
    
//     if (totalScore == random) {
//         wints++;
//         $('#wins').text(wints);
//         totalScore= 0; 
//         alert ("You won!");
//     }
    
//     else if (totalScore > random) {
//         losses++;
//         $('#losses').text(losses);
//         totalScore= 0; 
//         alert ("You lost!");
//     }
// }) 

// $('#image4').on ('click', function(){
//     totalScore = totalScore + crystal4;
//     $('#totalscore').text(totalScore); 

//     if (totalScore == random) {
//         wints++;
//         $('#wins').text(wints);
//         totalScore= 0; 
//         alert ("You won!");
//     }
    
//     else if (totalScore > random) {
//         losses++;
//         $('#losses').text(losses);
//         totalScore= 0; 
//         alert ("You lost!");  
//     }
// }); 


