const h1 = document.getElementById("heading");

function sumFun(a, b) {
  const sum = a + b;
  console.log("---Sum--:", sum);
  h1.innerText += sum;
  return sum;
}

function removeContent() {
  h1.innerText = "";
}

// console.log("--------------------------------");
// const n1 = 5;
// const n2 = 6;
// console.log(n1); /// print ? YES

// try {
//   n1 = 6;
// } catch (error) {
//   console.log(error.message);
// }

// console.log(n2);

// console.log("--------------------------------");

// console.log("Hello World");
// while (true);
// console.log("New World");

// setInterval
// setTimeout

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("njkdfherkj");
  }, 3000);
});

console.log("promise start :", 42);

const promiseFun = async () => {
  console.log("-----Line number-----:", 45);
  const value = await myPromise;
  console.log(value, " :47");
};

promiseFun();
console.log("promise end : 51");

// console.log("-----------Start From Here--------");
function sum(a, b) {
  console.log(a + b);
}

// console.log("sum1");
// sum(4, 8);
// console.log("sum2");
// sum(8, 8);
