const range = document.getElementById('range');
let minValue = document.getElementById('min');
let disPlay = "";
let data = "";

range.addEventListener("input", ()=>{
    minValue.innerHTML =  range.value;
    range.value < 10 ? minValue.innerHTML = '0' + range.value: minValue;
})

let password = {
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    numbers : "0123456789",
    symbols : "!@#$%^&*_-+"
}

const display = document.querySelector(".display")
const generate = document.querySelector(".btn");
const uppperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

display.innerHTML = "";

generate.addEventListener("click", ()=>{
    display.innerHTML = "";
    uppperCase.checked ? data += (password.upperCase) : "";
    lowerCase.checked ? data += (password.lowerCase) : "";
    numbers.checked ? data += (password.numbers) : "";
    symbols.checked ? data += (password.symbols) : "";
    console.log(data);
    console.log(data.length);

    // for (let i = 0; i < 5; i++) {
    //    disPlay += data.charAt(Math.floor(Math.random() * data.length))
    // }
    // console.log(disPlay);
})



