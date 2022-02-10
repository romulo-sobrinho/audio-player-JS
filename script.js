let audio = document.getElementById("audio");

function retroceder() {
  audio.currentTime -= 15; 
}

function avancar() {
  audio.currentTime += 15;
}

function iniciar() {
  audio.play();
}

function pausar() {
  audio.pause();
}
