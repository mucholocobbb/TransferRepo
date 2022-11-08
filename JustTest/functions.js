import { area } from "./index.js";

let a = setInterval(() => {
  console.log(">>>          Script          <<< : ");
}, 500);

setTimeout(() => {
  clearInterval(a);
}, 10000);

export function exportTest() {
  console.log(">>>    Export testing    <<<");
}

export function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.type = "module";

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`Не удалось загрузить скрипт ${src}`));

  document.body.append(script);
}

export function clearArea() {
  area.value = "";
  document.querySelector(".main_input").value = "";
}

export function insertText() {
  return document.querySelector(".main_input").value;
}

export function testPromise(atr) {
  for (let i = 0; i <= 2000; i++) {
    if (i === 2000) {
      return "it is " + atr;
    } else {
      rec(i);
    }
  }
}

function rec(r) {
  if (r === 0) {
    return 1;
  } else {
    return r - rec(r - 1);
  }
}
