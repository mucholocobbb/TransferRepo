import { exportTest, loadScript, clearArea, insertText } from "./functions.js";
import { promise1, promise2, promise3 } from "./promises.js";

let btn = document.querySelector(".main_btn");
let delBtn = document.querySelector(".main_delBtn");
export let area = document.querySelector(".main_textArea");

btn.addEventListener("click", () => {
  exportTest();
  setTimeout(clearArea, 10000);

  // Пример обычного промиса.
  // let promise = new Promise((resolve) => {
  //   let test = testPromise("Promise Щту");

  //   resolve(test);
  // });
  // promise.then((val) => {
  //   area.value = val + insertText();
  // });

  //Promise All
  Promise.all([promise1, promise2, promise3]).then((values) => {
    area.value = values + " " + insertText();
    console.log(values, " Promise All");
  });

  //Promise AllSettled
  let promises = [promise1, promise2, promise3];
  Promise.allSettled(promises).then((results) => {
    console.log(results, " Promise AllSettled");
  });

  //Prromise Race
  Promise.race(promises).then((res) => {
    console.log(res, "Promise Race");
  });
});

delBtn.addEventListener("click", () => {
  setTimeout(clearArea, 1000);
});

///////////////////////////////////////////////

/**
 * Пример вызова функции с колбэком.
 * onload, onerror - встроенные мехагизмы JS - Обработчик ошибок, функция , дожидающаяся
 * загрузки скрипта (Обьекта полностью).
 */
loadScript("/functions.js", function (error, script) {
  if (error) {
    console.log("Error part");
  } else {
    console.log(">>>   Скрипт загружен " + script + "   <<<", script);
    loadScript("/script1.js", function (error, script) {
      if (error) {
        console.log(error);
      } else {
        console.log(
          ">>>   Скрипт загружен " + script.src + "   <<<",
          script.type
        );
      }
    });
  }
});

console.log(">>>>    Выполнится первый    <<<<");
