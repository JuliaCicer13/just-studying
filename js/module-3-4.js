
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


function caclculateAverage(arg){
    let num = 0;
    for ( i = num; i >= num; i++) {
      if (arg === Number()) {
      num += arg;
    }  
   return num / arg;
    }
}
console.log(num)

// .............................................

let newArray = [];

function calculateNum() {
for (let array of newArray ) {
    
}

}

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// ..........................

function findSmallestNumber(numbers) {
    for (i = numbers; i >= numbers; i++){
         if (numbers === Array()) {
        return Math.min(numbers)
    } else {
       alert ("Not a numbers");
    }

    }
}
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(numbers);