// // rest parameter = (...rest) rebundling sapareted array


function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+= number
    }
    return result
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result+= number
    }
    return result / numbers.length
}


function combineString(...strings){
    return strings.join(" ")
}

const fullname = combineString("Mr.","Spongebob","III")

console.log(fullname);

const total = getAverage(100,70,85,75,90)

console.log(total);

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods
}

const food1 = "Martabak";
const food2 = "Es Kelapa";
const food3 = "Batagor";
const food4 = "Telor";

// openFridge(food1,food2,food3,food4)

const play = getFood(food1,food2,food3,food4)

console.log(play);