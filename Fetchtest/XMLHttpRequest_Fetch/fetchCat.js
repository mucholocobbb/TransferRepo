const url = "https://aws.random.cat/meow";
const url2 = "https://randomfox.ca/floof/";
const imgBlock = document.querySelector(".cat-container");
const btn = document.querySelector(".cat-button");
const btnfox = document.querySelector(".fox-button");

async function getImageFetch() {
  fetch(url)
    .then((res) => res.json())
    .then((img) => {
      imgBlock.innerHTML = `<img class="cat-container" src="${img.file}" alt="CAT">`;
    });

  // getImage = await (await fetch(url)).json()
  // imgBlock.innerHTML = `<img class="cat-container" src="${getImage.file}" alt="CAT">`;
}

function getImageXML() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url2);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      imgBlock.innerHTML = `<img class="cat-container" src="${xhr.response.image}" alt="CAT">`;
    }
  };
}

btn.addEventListener("click", () => {
  getImageFetch();
});

btnfox.addEventListener("click", () => {
  getImageXML();
});

getImageFetch();
