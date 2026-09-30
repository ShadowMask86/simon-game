// Array of colours

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

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
    // let audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
    // audio.play();

    $(".btn").click(function(){
        userClickedPattern.push(this.id);
        console.log(userClickedPattern);
        playSound(this.id);
        pressAnimation(this.id);
    });

    playSound(randomChosenColour);

    // pressAnimation(randomChosenColour);

}

    nextSequence();

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
        },1000);
    }

    // playSound(randomChosenColour);

    // Testing the implementation code.

    // let randomNumber = Math.floor(Math.random() * 4);

    // let randomChosenColour = buttonColours[randomNumber];

    // gamePattern.push(randomChosenColour);

    // $("#" + randomChosenColour).fadeOut(75).fadeIn(75);

    // let audio = new Audio(`./sounds/${randomChosenColour}.mp3`);

    // audio.play();

    // $(".btn").click(function(){
        // console.log(this.id);

        // userClickedPattern.push(this.id);
        // console.log(userClickedPattern);
    // });

    // function playSound(name){

    // }

    // console.log(gamePattern[0]);

    // let colorTest = 
    // $(".btn").click(function(){
    //     userClickedPattern.push(this.id);
    //     console.log(userClickedPattern);
    // });

    // console.log(colorTest);