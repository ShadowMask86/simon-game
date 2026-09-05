// Array of colours

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

//Sequence of Colors

function nextSequence() {

    // generate random number
    let randomNumber = Math.floor(Math.random() * 4);

    // choose random color
    let randomChosenColour = buttonColours[randomNumber];

    // add color to gamePattern
    gamePattern.push(randomChosenColour);

    // animate button
    $("#" + randomChosenColour).fadeOut(75).fadeIn(75);

    // play sound
    let audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
    audio.play();
}

    nextSequence();

    //Testing the implementation code.

    // let randomNumber = Math.floor(Math.random() * 4);

    // let randomChosenColour = buttonColours[randomNumber];

    // gamePattern.push(randomChosenColour);

    // console.log(gamePattern[0]);

    // $("#" + randomChosenColour).fadeOut(75).fadeIn(75);

    // let audio = new Audio(`./sounds/${randomChosenColour}.mp3`);

    // audio.play();