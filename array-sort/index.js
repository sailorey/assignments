// 1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
    let sorted = arr.sort((a, b) => a - b)
    return sorted   
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]


// 2) Sort an array from largest number to smallest

function leastToGreatest(arr) {
    let sorted = arr.sort((a, b) => b - a)
    return sorted   
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]


// 3)Sort an array from shortest string to longest

function lengthSort(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length)
    return sorted  
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]


// 4) Sort an array alphabetically

function alphabetical(arr) {
let sortArr = arr.sort()
return sortArr
  }
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]


// 5) Sort the objects in the array by age

function byAge(arr){
  return arr.sort((a,b)=>{ 
     return a.age-b.age; 
  });
}
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));

