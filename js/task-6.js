function min(a, b) {
    for(i = a; i <= b; i++ ){
        if (i === Number()){
       return i;
    } else {
        alert("There is not a number")
    }
}
    }
console.log(i);

function fizzBuzz(num) {
    for (let i = num; i <= num; i++){
        if(i % 3 && 5 === 0){  
            console.log('fizzbazz');
        } else if (i % 3 === 0) {
          console.log('fizz');

        } else if( i % 5 ===0) {
            console.log('buzz');
        } else {
            console.log(i)
        }
      }
    }
  fizzBuzz(15);