// function add()
// {
//     var num1 =parseInt( document.getElementById("firstNumber").value);
//     var num2 =parseInt( document.getElementById("secondNumber").value);
//     document.getElementById("output").innerHTML=num1 +num2;
// }

// function sub()
// {
//     var num1 =parseInt( document.getElementById("firstNumber").value);
//     var num2 =parseInt( document.getElementById("secondNumber").value);
//     document.getElementById("output").innerHTML=num1 - num2;
// }

// function mul()
// {
//     var num1 =parseInt( document.getElementById("firstNumber").value);
//     var num2 =parseInt( document.getElementById("secondNumber").value);
//     document.getElementById("output").innerHTML=num1 *num2;
// }

// function div()
// {
//     var num1 =parseInt( document.getElementById("firstNumber").value);
//     var num2 =parseInt( document.getElementById("secondNumber").value);
//     document.getElementById("output").innerHTML=num1/num2;
// }

// function reload()  //We can't use clear as a function name
// {
//     // alert("Clear is working");
//     // console.log("Yoo");
//     window.location.reload();
// }

//Cheak if a string is empty or not 


// function isEmpty(){
    
//     var givenString = document.getElementById("givenString").value;
//     if(givenString == ""){
//         document.getElementById("output").innerHTML = "Enter something !!";
        
//     }
//     else
// {return "Not";}
// }

let arr = [233,32,3,11,3,21];
// console.log(arr);
// console.log(arr.sort(function(a,b){return a-b}));

function min(a,b){
    if(a<b){return console.log(a);}
    else if(a>b){return console.log(b);}
    else {return console.log(a);}
}

function minArray(){
    var temp = parseInt(min(arr[0],arr[1]));
    temp = parseInt(min(temp,2));

    
    return temp;
   
}

minArray();