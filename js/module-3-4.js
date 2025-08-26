
let styles = ["jazz", "blues"];
styles.push("rock-n-roll");

let index = styles.indexOf("blues");
if (index !== -1) {
    styles[index] = "classic";
}

function logItems(array){
    for (let i = 0; i < array.length; i++){
        console.log(`${ i + 1} - ${array[i]}`)
    }
}


// ..................

function checkLogin(array) {
     let name = prompt("Enter your name");
    
       if (logins.includes(name)) {
        return alert(`Welcome, ${name}!`)
       } else {
          alert("User not found");
       }
     }

 const logins = ["Peter", "John", "Igor", "Sasha"];
 console.log(logins)
//  .............................


function caclculateAverage(...args){
    let sum = 0;
    let count = 0;
    for ( i = num; i <= args.length; i++) {
      if (typeof args[i] === "number" && !isNaN(args[i])) {
      sum += args[i];
      count ++;
    }  
    }
    if (count === 0) {
        return "Not valid numbers provided!"
    }
    return sum / args;
}


// .............................................


const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// ..........................

function findSmallestNumber(numbers) {

         if (Array.isArray(numbers)) {
        return Math.min(...numbers)
    } else {
       alert ("Not a numbers");
    }
    
    }
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers));
console.log(findSmallestNumber("hello"))

// ...........................


 const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };


  let sum = 0;

  for (const key in salaries) {
    sum += salaries[key] ;
    if (salaries === 0) {
    return sum = 0;
    }
  }

//   ........................
