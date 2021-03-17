
////////////////////////Starting : (Profit with javascript)

// console.log("Hello")
// alert("YOOOOO") 

// let i=0; //scope
// var i=0;
// const i =0;




var age = prompt("What is your age ?");
console.log(age)


document.getElementById('text').innerHTML=age;

// var num1 = 10;
// num1 = num1 +10;
// num1++;
// num1 += 9;
// console.log(num1) 
                   
//till now : variables,numbers,operations

/////////////////////////Now Functions --> 

// function PrintingYourName(YourName) 
// {
//     var YourName = prompt("What is your name ? ");
//     var result = "Hello" + ' ' + YourName;  //String Concetanantion
//     console.log(result)
// }

// PrintingYourName(name);

// //Sum of two numbers 

// function SumNumbers (a,b)
//     {
//        var result = a+b;
//        console.log(result) 
//     }

// SumNumbers(2,3);


// //////////////////////////////// Data types

// //let name = {first: 'Luvdipsingh' laste: 'Dadiyala'};  //Object
// let groceries = ['apple', 'banana', 'Stobery', 'lemon'] //array
// let nullNum = null //null
// let undefinedN // Undefined 

// ///////////////////////////////// Strings

// let fruit = 'banana,apple,blue,sexy' ;
// let moreFruits = "Apple";

// console.log(fruit.toLocaleUpperCase());
// console.log(fruit.length);
// console.log(fruit.indexOf('na'));
// console.log(fruit.indexOf('aan'));
// console.log(fruit.replace('ba','1'));
// console.log(fruit.slice(0,6));
// console.log(fruit.charAt(3));
// console.log(fruit[2]);
//         //  Split   
// console.log(fruit.split(','));   //Split by comma
// console.log(fruit.split(' '));   //Split by char
// console.log(fruit.split(',')); 
// */



// let fruits = ['banana','apple','teri maaki']
// let vegetables = ['suran','tamatar','pyaz','Aloo']


// for(let i=0; i<fruits.length; i++)
// {
//     console.log(fruits[i])
// }

// console.log(fruits)
// console.log(fruits.toString())
// console.log(fruits.join('-->'))
// fruits.pop()
// fruits.pop()
// fruits.push('umand')
// console.log(fruits)
// fruits.shift();
// console.log(fruits)
// fruits.unshift('Mera apple')
// console.log(fruits)

// let numbers = ['1','2','3']
// console.log(fruits.concat(vegetables))   // Mixing array 
// console.log(fruits.concat(numbers))

// console.log(fruits)
// console.log(fruits.reverse())

// */

// //Sorting 


// let Numbers = ['120','34','2','33','90']

// console.log(Numbers.sort(function(a,b){return a-b}))  // Assending Order // I don't know how it works
// console.log(Numbers.sort(function(a,b){return b-a}))  

// let array = new array()

// for(let num=0; num<=10; num++)
//     {
//         array.push(num)
//     }

// console.log(array)


// let EmptyArray = []

// for(let num=0; num<=10; num++)
//     {
//         EmptyArray.push(num)
//     }
// console.log(EmptyArray)


// //////////////////////////////////////////////   Objects in javascript 

// let student = {
//                 first:'Luvdip', 
//                 last:'Qazi',
//                 height:'5.6',
//                 full  : function (){
//                     console.log(student.first + '\n' + this.last)
//                 }
//               }
// student.full();


// 056 --> Weekend;
// default --> weekdays

// var Day = new Date().getDay()

// switch(5)
// {
//     case 0:
//         text = 'Weekends'
//     break;

//     case 5:
//         text = 'Weekends'
//     break;

//     default:
//         text = 'Weekdays'
//     break;
// }

// console.log(text)