//preliminary
//1. Write a for loop that prints to the console the numbers 0 through 9.
// const numbers = [0,1,2,3,4,5,6,7,8,9]
// for (let i = 0; i < numbers.length ;i++)
// console.log(numbers[i])

// 2. Write a for loop that prints to the console 9 through 0.
// const numbers = [0,1,2,3,4,5,6,7,8,9]
// for (var i = numbers.length - 1 ; i >= 0 ; i--)
// console.log(numbers[i])

// 3. Write a for loop that will prints these fruit to an array.
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (let i = 0; i < fruit.length ;i++)
// console.log(fruit[i])

//BRONZE
// 1.Write a for loop that will push the numbers 0 through 9 to an array.
// var numbers = [];
// for(var i = 0; i <= 9; i++){
//     numbers.push(i);
// }
// console.log(numbers); 

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// var numbers = [];
// for(var i = 0 ; i <=100; i+=2){
//     numbers.push(i)
// }
// console.log(numbers)

//3.Write a for loop that will push every other fruit to an array.
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(var i = 0 ; i < fruit.length; i+=2)
// console.log(fruit[i])

// Silver
//1. Write a loop that will print out all the names of the people of the people array
// let namesArr= []
// for (let i = 0; i < peopleArray.length ; i++)
//    namesArr.push(peopleArray[i].name)
// console.log(namesArr)

//2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// let namesArr = []
// let occupationsArr = []
// for (let i = 0; i < peopleArray.length; i++){
//   namesArr.push(peopleArray[i].name)
//   occupationsArr.push(peopleArray[i].occupation)
// }
// console.log(namesArr)
// console.log(occupationsArr)




//1. Create an array that mimics a grid like the following using nested `for` loops:

//[[0, 0, 0],
//[0, 0, 0],
//[0, 0, 0]]

// var num = 3;
// var arr = [];
// for (let i = 0; i < num; i++) {
//   arr[i] = [];
//   for (let j = 0; j < num; j++) {
//     arr[i][j] = 0;
//   }
// }
// console.log(arr);

//2.Create an array that mimics a grid like the following using nested for loops:

/*
[[0, 0, 0],
[1, 1, 1],
[2, 2, 2]]

var num = 3;
var zero = [];
var one = [];
var two = [];

for (let i = 0; i < num; i++) {
  zero[i] = 0;
}
for (let d = 0; d < num; d++) {
  one[d] = 1;
}
for (let k = 0; k < num; k++){
  two[k] = 2;
}
console.log(zero,one,two);

3..Create an array that mimics a grid like the following using nested for loops:

[[0, 1, 2],
[0, 1, 2],
[0, 1, 2]]

var num = 3;
var arr = [];

for (let i = 0; i < num; i++) {
  arr[i] = [];
  for (let j = 0; j < num; j++) {
    arr[i][j] = [0,1,2]
}}
console.log(arr);