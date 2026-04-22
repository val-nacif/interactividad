
let title = document.querySelector('h1');
let inputText = document.getElementById('input-text');
let inputColor = document.getElementById('input-color');
let inputBackgroundColor = document.getElementById('input-background-color');
inputText.addEventListener("input", function() {
    const value = inputText.value;
    title.innerText = value;
});

inputColor.addEventListener("input", function() {
    const value = inputColor.value;
    title.style.color = value;
});


inputBackgroundColor.addEventListener("input", function() {
    const value = inputBackgroundColor.value;
    document.body.style.backgroundColor = value;
});