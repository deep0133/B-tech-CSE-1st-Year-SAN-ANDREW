// // console.log("---------welcome in js----------");

// // let N = prompt("Enter the number");

// // let reverse = 0;

// // while (N > 0) {
// //   //   35              3
// //   const lastDigit = N % 10; //   5               3
// //   reverse = reverse * 10 + lastDigit; //    0*10 + 5 = 5   5*10 + 3 = 53

// //   N = parseInt(N / 10); //    N = 35/10 = 3  0
// //   console.log("-----check N--:", N);
// // }
// // console.log(reverse);

// // -------------JSON Data--------------

// const data = [
//   {
//     image: {
//       thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
//       mobile: "./assets/images/image-waffle-mobile.jpg",
//       tablet: "./assets/images/image-waffle-tablet.jpg",
//       desktop: "./assets/images/image-waffle-desktop.jpg",
//     },
//     name: "Waffle with Berries",
//     category: "Waffle",
//     price: 6.5,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
//       mobile: "./assets/images/image-creme-brulee-mobile.jpg",
//       tablet: "./assets/images/image-creme-brulee-tablet.jpg",
//       desktop: "./assets/images/image-creme-brulee-desktop.jpg",
//     },
//     name: "Vanilla Bean Crème Brûlée",
//     category: "Crème Brûlée",
//     price: 7.0,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
//       mobile: "./assets/images/image-macaron-mobile.jpg",
//       tablet: "./assets/images/image-macaron-tablet.jpg",
//       desktop: "./assets/images/image-macaron-desktop.jpg",
//     },
//     name: "Macaron Mix of Five",
//     category: "Macaron",
//     price: 8.0,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
//       mobile: "./assets/images/image-tiramisu-mobile.jpg",
//       tablet: "./assets/images/image-tiramisu-tablet.jpg",
//       desktop: "./assets/images/image-tiramisu-desktop.jpg",
//     },
//     name: "Classic Tiramisu",
//     category: "Tiramisu",
//     price: 5.5,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
//       mobile: "./assets/images/image-baklava-mobile.jpg",
//       tablet: "./assets/images/image-baklava-tablet.jpg",
//       desktop: "./assets/images/image-baklava-desktop.jpg",
//     },
//     name: "Pistachio Baklava",
//     category: "Baklava",
//     price: 4.0,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
//       mobile: "./assets/images/image-meringue-mobile.jpg",
//       tablet: "./assets/images/image-meringue-tablet.jpg",
//       desktop: "./assets/images/image-meringue-desktop.jpg",
//     },
//     name: "Lemon Meringue Pie",
//     category: "Pie",
//     price: 5.0,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-cake-thumbnail.jpg",
//       mobile: "./assets/images/image-cake-mobile.jpg",
//       tablet: "./assets/images/image-cake-tablet.jpg",
//       desktop: "./assets/images/image-cake-desktop.jpg",
//     },
//     name: "Red Velvet Cake",
//     category: "Cake",
//     price: 4.5,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
//       mobile: "./assets/images/image-brownie-mobile.jpg",
//       tablet: "./assets/images/image-brownie-tablet.jpg",
//       desktop: "./assets/images/image-brownie-desktop.jpg",
//     },
//     name: "Salted Caramel Brownie",
//     category: "Brownie",
//     price: 4.5,
//   },
//   {
//     image: {
//       thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
//       mobile: "./assets/images/image-panna-cotta-mobile.jpg",
//       tablet: "./assets/images/image-panna-cotta-tablet.jpg",
//       desktop: "./assets/images/image-panna-cotta-desktop.jpg",
//     },
//     name: "Vanilla Panna Cotta",
//     category: "Panna Cotta",
//     price: 6.5,
//   },
// ];

// // const arr = [1, 4, 5, 6];

// // n = arr[3] // 1

// const container = document.getElementById("container");

// for (let i = 0; i < data.length; i++) {
//   const myData = data[i];
//   const myName = myData.name;
//   const myCategory = myData.category;
//   const price = myData.price;
//   console.log(myName);
//   let myHTML = `<div class="card">
//         <h1>${myName}</h1>
//         <h2>${myCategory}</h2>
//         <h3>${price}</h3>
//       </div>`;
//   container.innerHTML += myHTML;
// }

// // Select element:
// // make variable with value:
// // assign value to element:

// // const a = 5;
// // const b = "My_Name";

// // const c = "b";
// // const c = b;

// ----------Functions--------------

// : prebuild & user defined function

// Named Function:
// Arraw Function
// IFFI Function:

function mySumFun(a, b) {
  const sum = a + b;
  return sum;
}
function mySubFun(a, b, c) {
  const sum = a - b - c;
  return sum;
}
function myDivFun(a, b) {
  const sum = a / b;
  return sum;
}

const me = mySumFun(5, 8);
console.log(me);

const mySub = mySubFun(5, 9, 7); // -11

console.log(mySub);
// Named funciton:
// const a = 6;
// const b = 7;
// let sum = a + b;
// sumFun(6, 7);

const arrFun = (a, b, c) => {
  const process = "" + a + " " + b + " " + c;
  console.log(process);
  return process;
};

(function () {
  console.log("Hello World");
})();

// const arrFunData = arrFun(67, "Name", "Hello");

// console.log(arrFunData);
