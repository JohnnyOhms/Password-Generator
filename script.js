const range = document.getElementById('range');

range.addEventListener("input", ()=>{
    let minValue = document.getElementById('min');
    minValue.innerHTML = range.value;
})

let password = {
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    numbers : "0123456789",
    symbols : "!@#$%^&*_-+"
}