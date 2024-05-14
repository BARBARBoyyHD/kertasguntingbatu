let textBox = document.getElementById("textBox");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelcius = document.getElementById("toCelcius");
let myButton = document.getElementById("myButton");

let result = document.getElementById("result")

let temp

function convert(){
    if(toFahrenheit.checked)
    {
        temp = Number(textBox.value)
        temp = Math.floor(temp * 9 /5 + 32)

        result.textContent = `${temp} °F`
    }
    else if( toCelcius.checked){
        temp = Number(textBox.value)
        temp = Math.floor((temp - 32) * 5 / 9);

        result.textContent = `${temp} °C`;
    }   
    else{
        result.textContent=`Select temprature`
    }
}