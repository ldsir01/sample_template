let CorrectNumber = Math.floor(Math.random() * 100 ) +1 ;
console.log("Correct number is " + CorrectNumber)

let Guesses = [];
window.onload = function()
{
    document.getElementById("number-submit").addEventListener("click",playgame)
    document.getElementById("restart-game").   addEventListener("click", restart)
}


function playgame()
{        
        var Enterd = document.getElementById("number-guess").value; 
        DisplayResult(Enterd);
        Save_History(Enterd);
        Display_History(Enterd);
}
 

function restart()
{
    window.location.reload()            //Reoad the page !!!!
}

function DisplayResult(Enterd)
{
    


    if(Enterd == CorrectNumber)
        {
        
        demo("won","Awesome job!, You got it ");
        }

        else if(Enterd < CorrectNumber) {demo("warning","Your guess is too low !!");}

        else {demo("warning","Your guess is too high !!");}



}



function demo(inputDemo,text)
{
    let dialog;
    switch(inputDemo)
    {
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>" + text;
            break;
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>" + text;
            break;
    }
    dialog = dialog + "</div>"
    document.getElementById("demo").innerHTML = dialog;
}

function Save_History(Enterd)
{
    Guesses.push(Enterd);
    console.log(Guesses);
    console.log(Guesses.length)
}

function Display_History(Enterd)
{
    
    console.log(Guesses.length)
    let i=0;

    while(i<Guesses.length)
    li = "<li> KiKi "
    li = li + Guess[i]
    li = li + "</li>"

    document.getElementById("counter").innerHTML = li
}
  