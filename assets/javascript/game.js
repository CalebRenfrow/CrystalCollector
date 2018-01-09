$(document).ready(function() {

var wins = 0;
var winsE = document.getElementById("wins");

var losses = 0;
var lossesE = document.getElementById("losses");


var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var randomNumberE = document.getElementById("randomNumber");


var totalScore = 0;
var totalScoreE = document.getElementById("totalScore");

var gem1Value,gem2Value,gem3Value,gem4Value;

function resetGame(){
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        totalScore = 0;
        totalScoreE.textContent = totalScore;
        
        randomNumberE.textContent = randomNumber;

         gem1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
         gem2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
         gem3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
         gem4Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    };

resetGame();

$("#gem-1").on("click",function(){
    totalScore += gem1Value;
totalScoreE.textContent = totalScore;
});

$("#gem-2").on("click",function(){
    totalScore += gem2Value;
totalScoreE.textContent = totalScore;
});

$("#gem-3").on("click",function(){
    totalScore += gem3Value;
totalScoreE.textContent = totalScore;
});

$("#gem-4").on("click",function(){
    totalScore += gem4Value;
totalScoreE.textContent = totalScore;
});

$(".gem").on("click",function(){
    
    if ( totalScore == randomNumber)
        { console.log("win");
            winsE.textContent = ++wins;
            resetGame();
        }

    if ( totalScore > randomNumber)
        {
            console.log("lost");
            lossesE.textContent = ++losses;
            resetGame();
        }
});
        

});