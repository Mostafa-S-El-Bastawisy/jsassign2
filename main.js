let a = "Elzero Web School";

console.log((a.charAt(2).toUpperCase() + a.slice(3, 6))); //Zero

// 8 H
console.log(a[13].repeat(8).toUpperCase(a)); //HHHHHHHHHH

// Return Arry 

console.log(a.split(" ", 1)); // [Elzero]

// Use Only "Substr" Method + Template Literals in Your Solution

console.log(`${a.substr(0, 7)}${a.substr(-6)}`); //Elezero School

// Solution Must Be Dynamic And String May Change 

console.log(a.charAt(0).toLowerCase() + a.substring(1, a.length - 1).toUpperCase()
 + a.charAt( a.length -1).toLowerCase()); // eLZERO WEB SCHOOl

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(); // e
console.log(); // e
console.log(userName[0].repeat(3).toLowerCase()); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toUpperCase().includes("Z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True

