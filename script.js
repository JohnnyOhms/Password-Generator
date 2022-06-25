const range = document.getElementById('range');
let min = document.getElementById('min');
let empty = "";
let minValue = min

range.addEventListener("input", ()=>{
    
    minValue.innerHTML =  range.value;
    range.value < 10 ? min.innerHTML = '0' + range.value: min;

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

generate.addEventListener("click", ()=>{

    if (minValue.textContent == 0){
        alert('Select a range number')
    }else{
        display.innerHTML = "";
        
        if(uppperCase.checked || lowerCase.checked || numbers.checked || symbols.checked ){
            let data = empty;
            uppperCase.checked ? (data += password.upperCase) : "";
            lowerCase.checked ? (data += password.lowerCase) : "";
            numbers.checked ? (data += password.numbers) : "";
            symbols.checked ? (data += password.symbols) : "";
            generatePassword(data)
            
        }else{
            alert("Atleast select a setting")
        }
    }

})

function generatePassword(data) {

    let dis_play = ""
    for (let i = 0; i < minValue.textContent; i++){
        dis_play += data.charAt(Math.floor(Math.random() * data.length))
    }

    display.innerHTML = dis_play;
    console.log(dis_play);
    
}

display.addEventListener("click", function(){
    
    let textArea = document.createElement("textarea");
    textArea.value = display.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove()
    alert("Password Copied");

})






