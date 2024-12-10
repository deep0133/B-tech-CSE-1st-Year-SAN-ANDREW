console.log("-------Welcome in JS-------");

// Assume user enter number N = ?
// Print numbers in reverse order from  : N to 1

// Input From User: using prompt:

// const N = prompt("Enter Number");

// Prompt ---> take input from user
// input store in left side variable  ---- N
// Print numbers in reverse order from  : N to 1

// if (N > 0) {
//   for (let i = N; i >= 1; i--) {
//     console.log(i);
//   }
// } else {
//   console.log("Invalid Number");
// }

// DOM :

// get Element by id:
// const h1 = document.getElementById("h1");

// console.log(h1);

// // New Content
// const newContent = "Hello World";

// // Assign newConent to Tag:

// h1.innerText = newContent;

// const elements = document.getElementsByClassName("heading");

// console.log(elements[1]);

// const newContent2 = "Hello India";

// elements[1].innerText = newContent2;

// Get by ClassName:

const elements = document.getElementsByClassName("heading");

console.log(elements);

const newContent = "Hello New World";

for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = newContent;
}

document.querySelector("h1");
document.querySelectorAll("h1");

document.getElementsByTagName("div");
