// // let Amazing  = 90;

// function letVarConst() {

//     if(1){
//         // alert("Yoo!!!");
//         var firstName = "Luvdipsingh";              //firstName => var => function
//         let lastName = "Dadiyala";
//         const Age = 19;
//         console.log("let print hoga ye wala " + lastName); 
//         lastName = "Shikh";
//         console.log("Heyy"+lastName);  
//         console.log("Age is " + Age);
//         Age = 30;
//         console.log("Age is " + Age);               //lastName => let => Scope hai blocks
//     }
//     console.log("First Name is " + firstName);
//     // console.log("Last Name is " + lastName);
//     console.log(Amazing);
// }

// letVarConst();
  
                    //Template Litrals => String Interpolation Allow Embadded expression !!!

// let firstName = "Luvdipsingh";
// let lastName = "Dadiyala";

// let fullName = `${firstName} ${lastName}`

// getFullname = () => {
//     let firstName = "Luvdipsingh"
//     let lastName = "Dadiyala"
//     return(`${firstName} ${lastName}`)
// }

// // console.log()
// let output = getFullname();
// console.log(output)

//  getFullname = (firstName, lastName) => console.log(`${firstName} ${lastName}`)
// getFullname(firstName,lastName);

sortBy = (sortType = "name") => {
    console.log(sortType);
} 

sortBy("date");