let currentLight = 0; // 0 buat red 1 buat yellow 2 buat green

function trafficLight() {
  // buat dapeting light nya
  let redlight = document.getElementsByClassName("redlight")[0]; // [0] karena mau ngambil urutan si class nya  kek collection sih
  let yellowlight = document.getElementsByClassName("yellowlight")[0];
  let greenlight = document.getElementsByClassName("greenlight")[0];

  // sekarang reset light nya jadi abu dulu di off in dulu

  redlight.style.backgroundColor = "grey";
  yellowlight.style.backgroundColor = "grey";
  greenlight.style.backgroundColor = "grey";

  // nyalain lampunya berdasarkan current state
  if (currentLight === 0) {
    redlight.style.backgroundColor = "red";
    setTimeout(trafficLight,5000)
  } 
  else if (currentLight === 1) {
    greenlight.style.backgroundColor = "green";
    setTimeout(trafficLight,4000)
  } 
  else if (currentLight === 2) {
    yellowlight.style.backgroundColor = "yellow";
    setTimeout(trafficLight,2000)
  }

  // next light state
  currentLight = (currentLight + 1) % 3; //nge cycle dari 0 1 2
}

// set interval nya ganti lights nya setiap 1000milisecon

trafficLight()
