const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  window.addEventListener('keydown', onKeyDownHandler);
}
 
// Keep track of index outside of the event handler.
let index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  console.log(key)
  if (key === code[index]) {
    index++;
    console.log('index is', index)
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}