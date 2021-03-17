// function Bold (){
//     alert("yo");
//     let Elem = document.createElement("b");
//     Elem.innerText = document.getElementById("demo").innerText;


//    document.getElementById("demo").innerHTML = Elem;
    
// }

function Bold() {
    let Elem = document.createElement("b");
    Elem.innerText = document.getElementById("demo").innerText;
    document.getElementById("demo").prepend(Elem);

}

function Undo() {
    let Elem = document.createElement("b");
    Elem.innerText = document.getElementById("demo").innerText;
    document.getElementById("demo").append(Elem);

}



document.getElementById("ChangeToBold").addEventListener("click",Bold)
document.getElementById("Undo").addEventListener("click",Undo)




// document.getElementById("demo").innerHTML = Elem;

// Bold();
// let Elem = document.createElement("b");
// let text = document.getElementById("demo").innerHTML;

// function Undo (){}

// console.log(document.getElementById("demo").innerText);
// // let text = "";
// let text = document.getElementById("demo").innerText;
// console.log(text);