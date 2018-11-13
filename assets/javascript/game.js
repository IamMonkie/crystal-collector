/*------------------------------------------------------------------------------------------------------------------------------------------
//runs at startup
--------------------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {

//reset on page load
window.onload = function () {
    reset();
}

/*------------------------------------------------------------------------------------------------------------------------------------------
//Variables
--------------------------------------------------------------------------------------------------------------------------------------------*/

let gemValue1 = 0;
let gemValue2 = 0;
let gemValue3 = 0;
let gemValue4 = 0;

let targetValue = 0;

let playerArray = [];
let playerValue = 0;

let wins = 0;
let losses = 0;

/*------------------------------------------------------------------------------------------------------------------------------------------
//scripts
--------------------------------------------------------------------------------------------------------------------------------------------*/
//Gem Buttons
$('#gemBox1').on("click", function () {
   playerArray.push(gemValue1);
   getSum();
   gameOverCheck();
   console.log("Gem Value 1: " + gemValue1 + '\n' +
   "target Value: " + targetValue + '\n' +
   "player Value: " + playerValue);
   

});

$('#gemBox2').on("click", function () {
    playerArray.push(gemValue2);
    getSum();
    gameOverCheck();
    console.log("Gem Value 2: " + gemValue2 + '\n' +
   "target Value: " + targetValue + '\n' +
   "player Value: " + playerValue);
    
});

$('#gemBox3').on("click", function () {
    playerArray.push(gemValue3);
    getSum();
    gameOverCheck();
    console.log("Gem Value 3: " + gemValue3 + '\n' +
   "target Value: " + targetValue + '\n' +
   "player Value: " + playerValue);
    
});

$('#gemBox4').on("click", function () {
    playerArray.push(gemValue4);
    getSum();
    gameOverCheck();
    console.log("Gem Value 4: " + gemValue4 + '\n' +
    "target Value: " + targetValue + '\n' +
    "player Value: " + playerValue); 
    
});

/*
//Reset Button
$("#resetBtn").on("click", function () { 
    reset();
})
*/
/*------------------------------------------------------------------------------------------------------------------------------------------
//Functions
--------------------------------------------------------------------------------------------------------------------------------------------*/

//player score
function getSum() {
    playerValue = playerArray.reduce(function(a,b){
        let sum = a + b;
        return sum;
    })
updatePlayer();
}
    
//play again       
function reset() {
        
    //assign Random Values to buttons
    gemValue1 = Math.floor(Math.random() * 12) + 1;
    gemValue2 = Math.floor(Math.random() * 12) + 1;
    gemValue3 = Math.floor(Math.random() * 12) + 1;
    gemValue4 = Math.floor(Math.random() * 12) + 1;

    //reset energy
    playerValue = 0;
    playerArray = [];

    //assign target value
    targetValue = Math.floor(Math.random() * 120) + 19;
    updateTarget();

    //reset energy gathered
    updatePlayer();
            
};

//wins/ losses
function gameOverCheck() {
    if(playerValue === targetValue) {
        wins++;
        document.getElementById("winsText").textContent = "WINS: " + wins;
        swal("THAT'S IT MORTY, WE DID IT. LET'S GET THE HECK OUT OF HERE", "PRESS OK TO PLAY AGAIN", "success");
        reset();
    
    }

    else if(playerValue > targetValue) {
        losses++;
        document.getElementById("lossesText").textContent = "LOSSES: " + losses;
        swal("AAW CRAP MORTY...YOU...YOU'VE REALLY GONE AND DONE IT THIS TIME. GUESS WERE NOT GOING ANYWHERE", "PRESS OK TO PLAY AGAIN", "error");
        reset();
    } 
}

//update target
function updateTarget() {
    document.getElementById("targetScore").textContent = "Energy Required: " + targetValue;
}
//update player
function updatePlayer() { 
    document.getElementById("playerScore").textContent = "Energy Gathered: " + playerValue;
}    

}); // ready close


