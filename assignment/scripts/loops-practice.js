console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   Set i at 0 to start count; continue as long as i<6 so it stops at 5; increment each loop; code to run: console.log i each loop;
console.log('count from 0 to 5');
for (let i = 0; i < 6; i++) {
  console.log(i);
}//Needs to be 6 so that it can count up to 5

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   Set i=3 to start count; run loop while i<=5; increment i each loop; code to run: console.log i each loop
console.log('count from 3 to 5');

//        for (let i = 0; i < 6; i++) {
//        console.log(i===3,4,5);
//}       **this attempt^ resulted in "false, 4, 5; true, 4, 5; false, 4, 5"
for (let i = 3; i <=5; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   Start i as 2 instead of 0; run loop while i is <= 10; increment i by 2 each loop; code to run: console.log i each loop
console.log('Count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i <= 10; i+=2) {
  console.log(i);
}

// Fancy version we have not yet learned: count even numbers from 2 to 10 (2, 4, 6, 8, 10);
// const arr = [2,3,4,5,6,7,8,9,10]
// const evenNumbers = arr.filter(numbers => {
//   return numbers % 2 === 0;
// })
//Parrotted from https://bobbyhadz.com/blog/javascript-find-even-numbers-in-array
//...I sort of get it, but I don't know what to then console.log and I'm not gonna worry about it.


// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (name of stars) {
  console.log(name);
}//Atom autofills 'VAR ___ of ___', that's just OG syntax right?

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i=0;//Do I have to declare this outside the While loop? Or can it be inside?
while (i<=4) {
  console.log(stars[i]);
  i++;
}
//
// // 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let count=0
while (count<=5) {
console.log(count);
count++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let index=10
while (index>=5) {
console.log(index);
index--;
}
