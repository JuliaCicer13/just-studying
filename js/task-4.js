
function getNumbers(min, max) {
  let result = [];
    for(let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        result.push(i);
    }
  }  
  return result;
}
console.log(getNumbers(1,10))


function isAdult(age){
  if (age >= 18) {
    return true;
  } else {
    alert("You are not adult");
    return false;
  }
}
console.log(isAdult(20));
console.log(isAdult(14));