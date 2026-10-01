// Array of colours

const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let gameStarted = false;

//Sequence of Colors

function nextSequence() {

    // generate random number
    let randomNumber = Math.floor(Math.random() * buttonColours.length);

    // choose random color
    let randomChosenColour = buttonColours[randomNumber];

    // add color to gamePattern
    gamePattern.push(randomChosenColour);

    // animate button
    $("#" + randomChosenColour).fadeOut(75).fadeIn(75);

    // play sound
    playSound(randomChosenColour);

    level++;
    $("h1").text("Level " + level);
}

$(".btn").click(function(){
    userClickedPattern.push(this.id);
    console.log(userClickedPattern);
    playSound(this.id);
    pressAnimation(this.id);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keydown", function(){
    if(!gameStarted){
        nextSequence();
        gameStarted = true;
    }
});

function playSound(name){

    // create audio using name
    let audio = new Audio(`./sounds/${name}.mp3`);

    // play audio
    audio.play();
}

function pressAnimation(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(() =>{
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentIndex){
    if(gamePattern[currentIndex] === userClickedPattern[currentIndex]){
        if(gamePattern.length === userClickedPattern.length){
            console.log("sequence is complete");
            setTimeout(() =>{
                nextSequence();
                userClickedPattern.length = 0;
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() =>{
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    gameStarted = false;
    level = 0;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
}