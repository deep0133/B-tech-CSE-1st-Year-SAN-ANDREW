// // console.log(b);
// // // console.log(b);

// // var a = 5;

// // let b = 6;
// // // const c = 78;
// console.log("welcome day 9");
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

// // const name1 = data[0].name;
// // console.log("first value", name1);
// // const category = data[0].category;
// // const price = data[0].price;
// // console.log("category=", category);
// // console.log("price", price);

const element = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
  const name1 = data[i].name;
  const price = data[i].price;
  const category = data[i].category;

  const htmlData = `<div class="card">
      <h1>${name1}</h1>
      <h2>${price}</h2>
      <h3>${category}</h3>
    </div>`;

  // const htmlData = `<div class="ag-courses_box">
  //       <div class="ag-courses_item">
  //         <a href="#" class="ag-courses-item_link">
  //           <div class="ag-courses-item_bg"></div>

  //           <div class="ag-courses-item_title">
  //            ${name1}
  //           </div>

  //           <div class="ag-courses-item_date-box">
  //             ${price}
  //             <span class="ag-courses-item_date"> ${category} </span>
  //           </div>
  //         </a>
  //       </div>
  //     </div>`;

  element.innerHTML += htmlData;
}

// // Select Element:
// // make variable with data:
// //  Assign variable to element

// -------------Functions-------------:

// const a = 6;
// const b = 7;

// const sum1 = a + b;

// const c = 4;
// const d = 3;

// const sum2 = c + d;

// function sum(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }

// sum(5, 8);
// sum(9, 2);
// sum(9, 8);
// sum(9, 85);

// Types of functions: prebuild , userDefined
// Named Function, Arrow fun..., Iffi

// Named Function
function sum(a, b) {
  const sum = a + b;
  console.log(sum);
  // return sum;
}

// const sumOfNo = sum(3, 6);
// const sumOfNo2 = sum(32, 6);

// console.log(sumOfNo, sumOfNo2);

// Arrow Function:
const sub = (a, b) => {
  const ans = a - b;
  return ans;
};

(function () {
  console.log("Hello Hello");
})();
