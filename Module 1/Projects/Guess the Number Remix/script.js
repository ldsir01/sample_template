var correctNumber = Math.floor((Math.random() * 100) + 1); 

let Guesses = [];
window.onload = function()
{
    document.getElementById("number-submit").addEventListener("click",playgame);
    document.getElementById("restart-game").addEventListener("click",restart);
}


function playgame()
{        
        var Enterd = document.getElementById("number-guess").value;
       

       

        DisplayResult(Enterd);
        
}
 

function restart()
{
    //            
}

function DisplayResult(Enterd)
{
    // 
    var result;
    if(Enterd < correctNumber)
        {document.getElementById("random").innerHTML = "Low";}
    else if(Enterd > correctNumber)
        {document.getElementById("random").innerHTML = "High";}
    else {document.getElementById("random").innerHTML = "Correct";}
}



function demo(inputDemo,text)
{
//    
}

function Save_History(Enterd)
{
    // 
}

function Display_History(Enterd)
{
    
//   
}
  