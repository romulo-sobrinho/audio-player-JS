let audio = document.getElementById("audio");
let play = document.getElementById("play");
let pause = document.getElementById("pause");


function retroceder() {
  audio.currentTime -= 15; 
}

function avancar() {
  audio.currentTime += 15;
}

function iniciar() {
  audio.play();
  play.style.display = "none";
  pause.style.display = "inline";
  pause.style.animationName = "expandir";
  pause.style.animationDuration = "1s";
  pause.style.animationIterationCount = "infinite";
  pause.style.animationTimingFunction = "linear";
}

function pausar() {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "inline";
}
