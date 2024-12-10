console.log("---------Welcome in JS---------");

//         0 1 2 3 4 5 6 7 8 9
// var arr = [5, 6, 2, 7, 8, 1, 3, 5, 4, 6];

// // Select element :

// const n4 = arr[3]; // 7
// console.log("4th value : ", n4);

// // update element : at 7th positon
// arr.splice(7, 1, 999);

// console.log("----Updated Array----:", arr);

// // Delete element: at 5th positon:
// arr.splice(5, 1);

// console.log("-----array after deleted-----:", arr);

// const arr = [1, 4, 5, 6, 73, 2, 4];
const k = 5;

// get length of an array : arr.length:

// for (let i = 0; i < arr.length; i++) {
//   const arr_i = arr[i];
//   if (arr_i === k) {
//     arr.splice(i, 1);
//   }
// }

// console.log("updated Array :", arr);

const arr = [1, 4, 5, 6, 73, 2, 4];

// Traversal:

// for (let i = 0; i < arr.length; i++) {
//   let arr_i = arr[i]; // index - i - : 0 1 2 3 4 5 6
//   if (arr_i === 5) {
//     console.log(arr_i);
//   }
// }

// Type of Data:

// int n  = 5 ,5.33
// string s =  "hello"
// char c = 't'
//  boolean b = true, false
//  array  arr = [2,3,5];
// Object ob = { }

// let ,var , const

// Object : key value pair

let student_id_card = {
  // key : value,
  name: "rohan",
  rollnumber: 13532,
  address: "xyz....abc",
  branch: "C",
  dob: "5-1-2003",
};

//  Select: Two method : dot and square bracket []

const myAddress = student_id_card.address;
const myBranch = student_id_card["branch"];

// console.log(myAddress, myBranch);

// Add new Key : id
student_id_card.id = 34;

console.log(student_id_card);

// update rollnumber key:
student_id_card.rollnumber = 8953368;

delete student_id_card.dob;

const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

for (let i = 0; i < arr.length; i++) {
  let arr_i = arr[i]; // index - i - : 0 1 2 3 4 5 6
  let name = arr_i.name;
  console.log(name);
}
