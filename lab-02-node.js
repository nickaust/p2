/* 
    CIT 281 Lab 2
    Name: Nick Austin
*/

function square(num) {
  return num * num;
}
console.log("Square Operations:");
for (let i = 2; i <= 10; i += 2) {
  console.log(`Square of ${i} is ${square(i)}`);
}
console.log(`Square of 20 is ${square(20)}`);
