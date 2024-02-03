// let x=95;
// if(x>90){
//     console.log("tanaya pass");
// }else if (x>70){
//     console.log("veer pass");
// }else if(x>50) {
//     console.log("Swapnil Pass");
// }else{
//     console.log("Akhilesh Fail");
// }

/* given a number n, for each integer i in the range from 1 to n inclusive , print one value per line as follows:
if i is a multiple of both 3 and 5, print fizzBuzz
if i is a multiple of 3 (but not 5), print Fizz
if i is a multiple of 5 (but not 3), print Buzz
if i is not a multiple of 3 or 5 , print the value of i */


function fizzBuzz(n) {
  for(let n=1;n>=20;n++){
    // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
}