let Gunting = document.getElementById("Gunting");
let Kertas = document.getElementById("Kertas");
let Batu = document.getElementById("Batu");
let myButton = document.getElementById("myButton");
let CPU = document.getElementById("CPU");

let result = document.getElementById("result");

let temp;

function play() {
  let bot = ["Gunting", "Kertas", "Batu"];

  let userselected;

  let shuffle = Math.floor(Math.random() * bot.length);

  let Computerselected = bot[shuffle];
  var name = document.getElementsByName("unit");
  console.log("yg dipilih komputer", Computerselected);

  console.log("Nama Nama inputan : ", name);
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
    if (name[i].checked) {
      console.log("yg di pilih : ", name[i].value);
      userselected = name[i].value
      if(userselected === Computerselected){
        // console.log("CPU : ",Computerselected);
        CPU.textContent =`Computer Selected ${Computerselected}`
        result.textContent="Draw"

      }
      else if(userselected === "Gunting" && Computerselected === "Batu"){
        // console.log("CPU : ",Computerselected);
        CPU.textContent =`Computer Selected ${Computerselected}`
        result.textContent="lose"
      }
      else if(userselected === "Kertas" && Computerselected === "Gunting"){
        // console.log("CPU : ",Computerselected);
        CPU.textContent =`Computer Selected ${Computerselected}`
        result.textContent="lose"
      }
      else if(userselected === "Batu" && Computerselected === "Kertas"){
        // console.log("CPU : ",Computerselected);
        CPU.textContent =`Computer Selected ${Computerselected}`
        result.textContent="lose"
      }
      else{
        // console.log("CPU : ",Computerselected);
        CPU.textContent =`Computer Selected ${Computerselected}`
        result.textContent="Win"
      }
    }
  }
}

myButton.onclick = play;
