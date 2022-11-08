
const btn = document.querySelector('.btn').addEventListener('click',getData);
const fSize = document.querySelector('#textsize');
const fWith = document.querySelector('#textstyle');
const result = document.querySelector('.center');


/**
 * Function return string with new template.
 * @param { Number } size  - inner param with text size.
 * @param { String } width - inner param with text width.
 * @returns String with tepmlate.
 */
const putText = (size,width) => {
    return `<h3 class="text"> This is ${size}px ${width} text  </h3>`;
}

/**
 * Function put template 
 */
function getData() {
    result.innerHTML = putText(fSize.value,fWith.value);
}
