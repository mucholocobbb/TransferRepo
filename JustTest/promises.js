import { testPromise } from "./functions.js";

let a = 1;

export let promise1 = new Promise((resolve) => {
  let test = testPromise("Promise ОДИН");

  resolve(test);
});

export let promise2 = new Promise((resolve) => {
  let test = testPromise("Promise ДВА");

  resolve(test);
});

export let promise3 = new Promise((resolve, reject) => {
  if (a == 1) {
    setTimeout(resolve, 3000, "Promise ТРИ");
  } else {
    reject(new Error("Ошибочный промис"));
  }
});
