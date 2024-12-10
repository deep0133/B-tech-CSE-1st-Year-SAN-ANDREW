// Select:
const h1Ele = document.getElementById("heading");

// new content variable:
const newContent = "--------12345--------";

// Assign Value to Tag:

h1Ele.innerText = newContent;

const divEle = document.getElementsByClassName("title");

//             0   1   2  3  ,.....
//  divEle = [div,div,div,div,....];

// divEle[2].innerText = "Third Div Tag";

// console.log(divEle);

// for (let i = 0; i < divEle.length; i++) {
//   if (i % 2 === 0) {
//     divEle[i].innerText = "Even";
//   } else {
//     divEle[i].innerText = "Odd";
//   }
// }

// Array:

//  index :  0   1  2  3  4  5  6  7  8  9
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// print Specific element of an array:
// syntax : array_name[index]
// length of an array : array_name.length

const firstElement = arr[0];
