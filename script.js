const range = document.getElementById('range');
let minValue = document.getElementById('min');

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
    let data = "";
    uppperCase.checked ? data += password.upperCase : data;
    lowerCase.checked ? data += password.lowerCase : data;
    numbers.checked ? data += password.numbers : data;
    symbols.checked ? data += password.symbols : data;
    console.log(data);

    display.innerHTML = showPassword(data);
})

function showPassword(d){
    let disPlay = "";
    for (let i = 0; i < 5; i++) {
       disPlay += d.charAt(Math.floor(Math.random() * d.length))
        // return disPlay;
        console.log(disPlay);
    }
    // display.innerHTML = disPlay;
 
    // console.log(disPlay);
}

