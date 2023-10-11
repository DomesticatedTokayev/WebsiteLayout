var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick()
    {
        buttonSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
    
}


document.addEventListener("keydown", function (event) {
    buttonSound(event.key);
    buttonAnimation(event.key);
}
);

function buttonSound(key)
{
    switch (key)
    {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "f":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "g":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "h":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
        
    }
}

function buttonAnimation(key)
{
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}